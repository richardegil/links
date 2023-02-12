import fetch from 'node-fetch';
import { Handler, HandlerEvent, HandlerContext, builder } from "@netlify/functions";

export type LinkItem = {
  id: string;
  order: string;
  name: string;
  url: string;
};

function parseNotionDatabase(data): LinkItem[] {
  const results = data.results;
  

  return results?.map((result): LinkItem => {
      const { name, url, number } =
        result.properties;

      return {
        id: result.id,
        order: number.rich_text[0].plain_text,
        name: name.title[0].plain_text,
        url: url.rich_text[0].href
      };
    })
    .sort((a, b) => a.order - b.order)
}

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const notionSecret = process.env.NOTION_SECRET;
  const notionDatabaseID = process.env.NOTION_DB_ID;

  const response = await fetch(
    `https://api.notion.com/v1/databases/${notionDatabaseID}/query/`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${notionSecret}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
    },
  );

  if (!response.ok) {
    console.error(response);
  
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'unable to load data from Notion' }),
    };
  }
  
  const data = await response.json();
  const items = parseNotionDatabase(data);

  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };  
}