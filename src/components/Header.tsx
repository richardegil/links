import React, { useEffect } from 'react'

const Header = () => {
  let wrapper: HTMLElement;
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  async function writingAll (stringTarget: string, container: string){
    wrapper = document.querySelector('['+container+']') as HTMLElement;
    const stringsContainer = document.getElementsByClassName(stringTarget);
      
    while(wrapper){
      for (let i=0; i <  stringsContainer.length ; i++){
        const string = stringsContainer[i]?.textContent;
        await write(string!)
        await sleep(2000)
        await erase()
        await sleep(1000)
      };
    }
  };

  async function write(text: string){    
    let index = 0
    while(index < text.length){
      const timeout = 100
      await sleep(timeout)
      index++
      wrapper.innerHTML = text.substring(0, index)
    }
  };


  async function erase() {
    while(wrapper?.textContent?.length){
      const timeout = 100
      await sleep(timeout)
      wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
    }
  };

  useEffect(() => {
    // writingAll('item', 'data-text');
  }, [])

  return (
    <header className='flex  flex-col justify-start items-center py-12 gap-4'>
      <div>
      <svg id="logoMark" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M92.75 46.875C92.75 72.2111 72.2111 92.75 46.875 92.75C21.5389 92.75 1 72.2111 1 46.875C1 21.5389 21.5389 1 46.875 1C72.2111 1 92.75 21.5389 92.75 46.875Z" fill="none" stroke="#FFC0CB" strokeWidth="2"/>
        <path d="M21.5874 38.3187C22.6126 38.3187 23.4437 37.4876 23.4437 36.4625C23.4437 35.4373 22.6126 34.6062 21.5874 34.6062C20.5623 34.6062 19.7312 35.4373 19.7312 36.4625C19.7312 37.4876 20.5623 38.3187 21.5874 38.3187Z" fill="#FFC0CB"/>
        <path d="M29.025 69.5438C30.0501 69.5438 30.8812 68.7127 30.8812 67.6876C30.8812 66.6624 30.0501 65.8313 29.025 65.8313C27.9998 65.8313 27.1687 66.6624 27.1687 67.6876C27.1687 68.7127 27.9998 69.5438 29.025 69.5438Z" fill="#FFC0CB"/>
        <path d="M32.7374 58.3938C33.7625 58.3938 34.5936 57.5627 34.5936 56.5375C34.5936 55.5123 33.7625 54.6813 32.7374 54.6813C31.7122 54.6813 30.8811 55.5123 30.8811 56.5375C30.8811 57.5627 31.7122 58.3938 32.7374 58.3938Z" fill="#FFC0CB"/>
        <path d="M38.6876 50.9563C39.7127 50.9563 40.5438 50.1252 40.5438 49.1C40.5438 48.0748 39.7127 47.2438 38.6876 47.2438C37.6624 47.2438 36.8313 48.0748 36.8313 49.1C36.8313 50.1252 37.6624 50.9563 38.6876 50.9563Z" fill="#FFC0CB"/>
        <path d="M30.5062 18.2437C31.5313 18.2437 32.3624 17.4127 32.3624 16.3875C32.3624 15.3623 31.5313 14.5312 30.5062 14.5312C29.481 14.5312 28.6499 15.3623 28.6499 16.3875C28.6499 17.4127 29.481 18.2437 30.5062 18.2437Z" fill="#FFC0CB"/>
        <path d="M31.9937 33.1125C33.0189 33.1125 33.85 32.2815 33.85 31.2563C33.85 30.2311 33.0189 29.4 31.9937 29.4C30.9685 29.4 30.1375 30.2311 30.1375 31.2563C30.1375 32.2815 30.9685 33.1125 31.9937 33.1125Z" fill="#FFC0CB"/>
        <path d="M28.2813 62.8563C29.3065 62.8563 30.1375 62.0252 30.1375 61C30.1375 59.9749 29.3065 59.1438 28.2813 59.1438C27.2561 59.1438 26.425 59.9749 26.425 61C26.425 62.0252 27.2561 62.8563 28.2813 62.8563Z" fill="#FFC0CB"/>
        <path d="M45.3812 79.2125C46.4063 79.2125 47.2374 78.3814 47.2374 77.3563C47.2374 76.3311 46.4063 75.5 45.3812 75.5C44.356 75.5 43.5249 76.3311 43.5249 77.3563C43.5249 78.3814 44.356 79.2125 45.3812 79.2125Z" fill="#FFC0CB"/>
        <path d="M55.0437 70.2875C56.0689 70.2875 56.9 69.4564 56.9 68.4312C56.9 67.406 56.0689 66.575 55.0437 66.575C54.0186 66.575 53.1875 67.406 53.1875 68.4312C53.1875 69.4564 54.0186 70.2875 55.0437 70.2875Z" fill="#FFC0CB"/>
        <path d="M46.8687 71.775C47.8939 71.775 48.725 70.9439 48.725 69.9187C48.725 68.8936 47.8939 68.0625 46.8687 68.0625C45.8435 68.0625 45.0125 68.8936 45.0125 69.9187C45.0125 70.9439 45.8435 71.775 46.8687 71.775Z" fill="#FFC0CB"/>
        <path d="M72.1436 27.9125C73.1688 27.9125 73.9999 27.0814 73.9999 26.0562C73.9999 25.031 73.1688 24.2 72.1436 24.2C71.1184 24.2 70.2874 25.031 70.2874 26.0562C70.2874 27.0814 71.1184 27.9125 72.1436 27.9125Z" fill="#FFC0CB"/>
        <path d="M76.6062 39.8063C77.6314 39.8063 78.4625 38.9752 78.4625 37.95C78.4625 36.9248 77.6314 36.0938 76.6062 36.0938C75.5811 36.0938 74.75 36.9248 74.75 37.95C74.75 38.9752 75.5811 39.8063 76.6062 39.8063Z" fill="#FFC0CB"/>
        <path d="M63.2249 17.5C64.2501 17.5 65.0812 16.6689 65.0812 15.6437C65.0812 14.6185 64.2501 13.7875 63.2249 13.7875C62.1997 13.7875 61.3687 14.6185 61.3687 15.6437C61.3687 16.6689 62.1997 17.5 63.2249 17.5Z" fill="#FFC0CB"/>
        <path d="M78.0938 47.9875C79.119 47.9875 79.9501 47.1565 79.9501 46.1313C79.9501 45.1061 79.119 44.275 78.0938 44.275C77.0686 44.275 76.2375 45.1061 76.2375 46.1313C76.2375 47.1565 77.0686 47.9875 78.0938 47.9875Z" fill="#FFC0CB"/>
        <path d="M68.4249 42.0375C69.45 42.0375 70.2811 41.2064 70.2811 40.1812C70.2811 39.156 69.45 38.325 68.4249 38.325C67.3997 38.325 66.5686 39.156 66.5686 40.1812C66.5686 41.2064 67.3997 42.0375 68.4249 42.0375Z" fill="#FFC0CB"/>
        <path d="M69.9124 53.9313C70.9376 53.9313 71.7687 53.1002 71.7687 52.075C71.7687 51.0498 70.9376 50.2188 69.9124 50.2188C68.8872 50.2188 68.0562 51.0498 68.0562 52.075C68.0562 53.1002 68.8872 53.9313 69.9124 53.9313Z" fill="#FFC0CB"/>
        <path d="M30.5125 16.3875L76.6062 37.9499" stroke="#FFC0CB" strokeWidth="0.6" strokeMiterlimit="10"/>
        <path d="M32.7375 56.5375L55.0438 68.4312" stroke="#FFC0CB" strokeWidth="0.6" strokeMiterlimit="10"/>
        <path d="M46.8625 69.9188L63.225 15.6438" stroke="#FFC0CB" strokeWidth="0.6" strokeMiterlimit="10"/>
        <path d="M78.0937 46.125L21.5874 36.4625" stroke="#FFC0CB" strokeWidth="0.6" strokeMiterlimit="10"/>
        <path d="M72.1437 26.0563L31.9937 31.2563" stroke="#FFC0CB" strokeWidth="0.6" strokeMiterlimit="10"/>
        <path d="M45.3813 77.35L28.2812 61" stroke="#FFC0CB" strokeWidth="0.6" strokeMiterlimit="10"/>
        <path d="M29.0249 67.6875L68.4249 40.1813" stroke="#FFC0CB" strokeWidth="0.6" strokeMiterlimit="10"/>
        <path d="M70 52L39 49" stroke="#FFC0CB" strokeWidth="0.6" strokeMiterlimit="10"/>
      </svg>
      </div>
      <div>
      <h1 className='font-display text-[3rem] text-[#ffffff] text-center'>Richard Gil</h1>
      <p className='font-display text-[1rem] text-[#FFFFFF] text-center'>Creative Coder <span className='text-[#00ffff]'>/</span> Developer <span className='text-[#00ffff]'>/</span> Designer <span className='text-[#00ffff]'>/</span> Artist <span className='text-[#00ffff]'>/</span> Figuring things out</p>
      </div>
    </header>
  )
}

export default Header