

export default () => {
    

 // Do something with the image


    return (
        <div className="w-[85%] mx-auto sm:mx-0 md:max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
            <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8 flex flex-col items-center justify-center">
            <svg className="w-8 h-10 mx-auto" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.83333 3.33333C7.50725 3.33333 6.23548 3.86012 5.2978 4.7978C4.36012 5.73548 3.83333 7.00725 3.83333 8.33333V16.6667H0.5V8.33333C0.5 6.1232 1.37797 4.00358 2.94078 2.44078C4.50358 0.877974 6.6232 0 8.83333 0L17.1667 0V3.33333H8.83333ZM42.1667 3.33333H33.8333V0H42.1667C44.3768 0 46.4964 0.877974 48.0592 2.44078C49.622 4.00358 50.5 6.1232 50.5 8.33333V16.6667H47.1667V8.33333C47.1667 7.00725 46.6399 5.73548 45.7022 4.7978C44.7645 3.86012 43.4927 3.33333 42.1667 3.33333ZM43.8333 26.6667H7.16667V23.3333H43.8333V26.6667ZM0.5 41.6667V33.3333H3.83333V41.6667C3.83333 42.9927 4.36012 44.2645 5.2978 45.2022C6.23548 46.1399 7.50725 46.6667 8.83333 46.6667H17.1667V50H8.83333C6.6232 50 4.50358 49.122 2.94078 47.5592C1.37797 45.9964 0.5 43.8768 0.5 41.6667ZM47.1667 41.6667V33.3333H50.5V41.6667C50.5 43.8768 49.622 45.9964 48.0592 47.5592C46.4964 49.122 44.3768 50 42.1667 50H33.8333V46.6667H42.1667C43.4927 46.6667 44.7645 46.1399 45.7022 45.2022C46.6399 44.2645 47.1667 42.9927 47.1667 41.6667Z" fill="#4F46E5"/>
            </svg>
                <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Scan your file</span></p>
            </label>
            <input id="file" type="file" className="hidden" />
        </div>
    )
}