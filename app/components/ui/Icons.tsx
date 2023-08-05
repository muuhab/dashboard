import Dashboard from 'public/images/dashboard.svg'

export const Icons = {
    logo: (props: any) => (
        <svg width="26" height="28" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4605 1.08011C11.846 0.306631 13.5191 0.30663 14.9046 1.08011L22.9369 5.56423C24.4334 6.39972 25.3651 8.00825 25.3651 9.75676V18.2432C25.3651 19.9918 24.4334 21.6003 22.9369 22.4358L14.9046 26.9199C13.5191 27.6934 11.846 27.6934 10.4605 26.9199L2.42822 22.4358C0.931626 21.6003 0 19.9918 0 18.2432L0 9.75676C0 8.00825 0.931624 6.39972 2.42822 5.56423L10.4605 1.08011Z" fill="#2E2C34" />
            <ellipse cx="12.6827" cy="13.7208" rx="4.83069" ry="4.95781" fill="#FBFAFC" />
        </svg>

    ),
    dashboard: (props: any) => (
        <svg width="24" height="24" {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="dashboard">
                <path id="Vector" d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" />
            </g>
        </svg>

    ),
    product: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  {...props}>
            <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z" />
        </svg>
    ),
    order: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  {...props} >
            <path d="M18 17H6V15H18V17ZM18 13H6V11H18V13ZM18 9H6V7H18V9ZM3 22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22Z" />
        </svg>
    ),
    customer: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM15 9C15 10.6575 13.6575 12 12 12C10.3425 12 9 10.6575 9 9C9 7.3425 10.3425 6 12 6C13.6575 6 15 7.3425 15 9ZM6 16.6667C6 14.8933 9.9975 14 12 14C14.0025 14 18 14.8933 18 16.6667V18H6V16.6667Z" />
        </svg>
    ),
    reviews: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM15.09 14.5L12 12.635L8.91 14.5L9.73 10.985L7 8.62L10.595 8.315L12 5L13.405 8.315L17 8.62L14.27 10.985L15.09 14.5Z" />
        </svg>
    ),
    checkout: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  {...props}>
            <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" />
        </svg>
    ),
    settings: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  {...props}>
            <path d="M19.1401 12.9399C19.1801 12.6399 19.2001 12.3299 19.2001 11.9999C19.2001 11.6799 19.1801 11.3599 19.1301 11.0599L21.1601 9.4799C21.3401 9.3399 21.3901 9.0699 21.2801 8.8699L19.3601 5.5499C19.2401 5.3299 18.9901 5.2599 18.7701 5.3299L16.3801 6.2899C15.8801 5.9099 15.3501 5.5899 14.7601 5.3499L14.4001 2.8099C14.3601 2.5699 14.1601 2.3999 13.9201 2.3999H10.0801C9.84011 2.3999 9.65011 2.5699 9.61011 2.8099L9.25011 5.3499C8.66011 5.5899 8.12011 5.9199 7.63011 6.2899L5.24011 5.3299C5.02011 5.2499 4.77011 5.3299 4.65011 5.5499L2.74011 8.8699C2.62011 9.0799 2.66011 9.3399 2.86011 9.4799L4.89011 11.0599C4.84011 11.3599 4.80011 11.6899 4.80011 11.9999C4.80011 12.3099 4.82011 12.6399 4.87011 12.9399L2.84011 14.5199C2.66011 14.6599 2.61011 14.9299 2.72011 15.1299L4.64011 18.4499C4.76011 18.6699 5.01011 18.7399 5.23011 18.6699L7.62011 17.7099C8.12011 18.0899 8.65011 18.4099 9.24011 18.6499L9.60011 21.1899C9.65011 21.4299 9.84011 21.5999 10.0801 21.5999H13.9201C14.1601 21.5999 14.3601 21.4299 14.3901 21.1899L14.7501 18.6499C15.3401 18.4099 15.8801 18.0899 16.3701 17.7099L18.7601 18.6699C18.9801 18.7499 19.2301 18.6699 19.3501 18.4499L21.2701 15.1299C21.3901 14.9099 21.3401 14.6599 21.1501 14.5199L19.1401 12.9399ZM12.0001 15.5999C10.0201 15.5999 8.40011 13.9799 8.40011 11.9999C8.40011 10.0199 10.0201 8.3999 12.0001 8.3999C13.9801 8.3999 15.6001 10.0199 15.6001 11.9999C15.6001 13.9799 13.9801 15.5999 12.0001 15.5999Z" />
        </svg>
    ),
    arrowDown: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"  {...props}>
            <path d="M6.175 7.15833L10 10.975L13.825 7.15833L15 8.33332L10 13.3333L5 8.33332L6.175 7.15833Z" />
        </svg>
    ),
    arrowUp: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"  {...props}>
            <path d="M6.175 12.8416L10 9.02496L13.825 12.8416L15 11.6666L10 6.66663L5 11.6666L6.175 12.8416Z" />
        </svg>
    ),
    search: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#84818A" />
        </svg>
    ),
    bell: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" />
        </svg>
    ),
    dollar: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C1.44772 2 1 2.44772 1 3V9C1 9.55228 1.44772 10 2 10H10C10.5523 10 11 9.55228 11 9V3C11 2.44772 10.5523 2 10 2H2ZM5.5 8.5H6.5V8H7C7.275 8 7.5 7.775 7.5 7.5V6C7.5 5.725 7.275 5.5 7 5.5H5.5V5H7.5V4H6.5V3.5H5.5V4H5C4.725 4 4.5 4.225 4.5 4.5V6C4.5 6.275 4.725 6.5 5 6.5H6.5V7H4.5V8H5.5V8.5Z" />
        </svg>
    ),
    visitor: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
            <path d="M2 3H1V10C1 10.55 1.45 11 2 11H9V10H2V3ZM10 1H4C3.45 1 3 1.45 3 2V8C3 8.55 3.45 9 4 9H10C10.55 9 11 8.55 11 8V2C11 1.45 10.55 1 10 1ZM7 2C7.83 2 8.5 2.67 8.5 3.5C8.5 4.33 7.83 5 7 5C6.17 5 5.5 4.33 5.5 3.5C5.5 2.67 6.17 2 7 2ZM10 8H4V7.25C4 6.255 6 5.75 7 5.75C8 5.75 10 6.255 10 7.25V8Z" />
        </svg>
    )
    ,
    receipt: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
            <path d="M9 8.5H3V7.5H9V8.5ZM9 6.5H3V5.5H9V6.5ZM9 4.5H3V3.5H9V4.5ZM1.5 11L2.25 10.25L3 11L3.75 10.25L4.5 11L5.25 10.25L6 11L6.75 10.25L7.5 11L8.25 10.25L9 11L9.75 10.25L10.5 11V1L9.75 1.75L9 1L8.25 1.75L7.5 1L6.75 1.75L6 1L5.25 1.75L4.5 1L3.75 1.75L3 1L2.25 1.75L1.5 1V11Z" />
        </svg>
    ),
    undo: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
            <path d="M6.25 4C4.925 4 3.725 4.495 2.8 5.3L1 3.5V8H5.5L3.69 6.19C4.385 5.61 5.27 5.25 6.25 5.25C8.02 5.25 9.525 6.405 10.05 8L11.235 7.61C10.54 5.515 8.575 4 6.25 4Z" />
        </svg>
    ),
    topRightArrow: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none" {...props}>
            <path d="M6.37516 4.04175V5.45841H11.0431L2.8335 13.668L3.83225 14.6667L12.0418 6.45716V11.1251H13.4585V4.04175H6.37516Z" fill="#20C9AC" />
        </svg>
    ),
    bottomRightArrow: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none" {...props}>
            <path d="M13.4585 6.87492H12.0418V11.5428L3.83225 3.33325L2.8335 4.332L11.0431 12.5416H6.37516V13.9583H13.4585V6.87492Z" fill="#FC3400" />
        </svg>
    ),
    arrowDropDown: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
            <path d="M4.5 6.75L9 11.25L13.5 6.75H4.5Z" fill="#84818A" />
        </svg>
    ),
    refresh: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
            <path d="M17.6498 6.35C16.1998 4.9 14.2098 4 11.9998 4C7.57977 4 4.00977 7.58 4.00977 12C4.00977 16.42 7.57977 20 11.9998 20C15.7298 20 18.8398 17.45 19.7298 14H17.6498C16.8298 16.33 14.6098 18 11.9998 18C8.68977 18 5.99977 15.31 5.99977 12C5.99977 8.69 8.68977 6 11.9998 6C13.6598 6 15.1398 6.69 16.2198 7.78L12.9998 11H19.9998V4L17.6498 6.35Z" fill="#84818A" />
        </svg>
    ),
    more: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#84818A" />
        </svg>
    ),
    block: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" {...props}>
            <path d="M17.3332 9.00008C17.3332 4.41675 13.5832 0.666748 8.99984 0.666748C4.4165 0.666748 0.666504 4.41675 0.666504 9.00008C0.666504 13.5834 4.4165 17.3334 8.99984 17.3334C13.5832 17.3334 17.3332 13.5834 17.3332 9.00008ZM3.74984 4.91675L13.0832 14.2501C11.9998 15.1667 10.5832 15.6667 8.99984 15.6667C5.33317 15.6667 2.33317 12.6667 2.33317 9.00008C2.33317 7.41675 2.83317 6.00008 3.74984 4.91675ZM15.6665 9.00008C15.6665 10.5834 15.1665 12.0001 14.2498 13.0834L4.9165 3.75008C5.99984 2.83341 7.4165 2.33341 8.99984 2.33341C12.6665 2.33341 15.6665 5.33342 15.6665 9.00008Z" fill="#B6B4BA" />
        </svg>
    ),
    mail: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" {...props}>
            <path d="M16.6665 3.33325H3.33317C2.4165 3.33325 1.67484 4.08325 1.67484 4.99992L1.6665 14.9999C1.6665 15.9166 2.4165 16.6666 3.33317 16.6666H16.6665C17.5832 16.6666 18.3332 15.9166 18.3332 14.9999V4.99992C18.3332 4.08325 17.5832 3.33325 16.6665 3.33325ZM16.6665 6.66658L9.99984 10.8333L3.33317 6.66658V4.99992L9.99984 9.16658L16.6665 4.99992V6.66658Z" fill="#B6B4BA" />
        </svg>
    ),
    personAdd: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" {...props}>
            <path d="M12.5002 9.99992C14.3418 9.99992 15.8335 8.50825 15.8335 6.66658C15.8335 4.82492 14.3418 3.33325 12.5002 3.33325C10.6585 3.33325 9.16683 4.82492 9.16683 6.66658C9.16683 8.50825 10.6585 9.99992 12.5002 9.99992ZM5.00016 8.33325V5.83325H3.3335V8.33325H0.833496V9.99992H3.3335V12.4999H5.00016V9.99992H7.50016V8.33325H5.00016ZM12.5002 11.6666C10.2752 11.6666 5.8335 12.7833 5.8335 14.9999V16.6666H19.1668V14.9999C19.1668 12.7833 14.7252 11.6666 12.5002 11.6666Z" fill="#B6B4BA" />
        </svg>
    ),
    chevronRight: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
            <path d="M7.49988 4.5L6.44238 5.5575L9.87738 9L6.44238 12.4425L7.49988 13.5L11.9999 9L7.49988 4.5Z" fill="#84818A" />
        </svg>
    ),
    chevronLeft: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
            <path d="M11.5575 5.5575L10.5 4.5L6 9L10.5 13.5L11.5575 12.4425L8.1225 9L11.5575 5.5575Z" fill="#84818A" />
        </svg>
    ),
    rightArrow: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" {...props}>
            <path d="M12.5003 4.16663L11.3253 5.34163L15.142 9.16663H1.66699V10.8333H15.142L11.317 14.6583L12.5003 15.8333L18.3337 9.99996L12.5003 4.16663Z" fill="#2E2C34" />
        </svg>
    ),
    leftArrow: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" {...props}>
            <path d="M7.50033 15.8333L8.67533 14.6583L4.85866 10.8333H18.3337V9.16663H4.85866L8.68366 5.34163L7.50033 4.16663L1.66699 9.99996L7.50033 15.8333Z" fill="#84818A" />
        </svg>
    ),
    eyesOpen: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="white" {...props}>
            <path d="M8.00033 3C4.66699 3 1.82033 5.07333 0.666992 8C1.82033 10.9267 4.66699 13 8.00033 13C11.3337 13 14.1803 10.9267 15.3337 8C14.1803 5.07333 11.3337 3 8.00033 3ZM8.00033 11.3333C6.16033 11.3333 4.66699 9.84 4.66699 8C4.66699 6.16 6.16033 4.66667 8.00033 4.66667C9.84033 4.66667 11.3337 6.16 11.3337 8C11.3337 9.84 9.84033 11.3333 8.00033 11.3333ZM8.00033 6C6.89366 6 6.00033 6.89333 6.00033 8C6.00033 9.10667 6.89366 10 8.00033 10C9.10699 10 10.0003 9.10667 10.0003 8C10.0003 6.89333 9.10699 6 8.00033 6Z" />
        </svg>
    ),
    trash: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0837 2.5L12.917 3.33333H15.8337V5H4.16699V3.33333H7.08366L7.91699 2.5H12.0837ZM5.00033 15.8333C5.00033 16.7499 5.75033 17.4999 6.66699 17.4999H13.3337C14.2503 17.4999 15.0003 16.7499 15.0003 15.8333V5.83325H5.00033V15.8333ZM6.66709 7.5H13.3338V15.8333H6.66709V7.5Z" fill="#FC3400" />
        </svg>
    ),
    image: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
            <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#5542F6" />
        </svg>
    ),
    keyboardArrowDown: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props}>
            <path d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z" fill="#84818A" />
        </svg>
    ),
    edit: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" {...props}>
            <path d="M2.5 14.3749V17.4999H5.625L14.8417 8.28322L11.7167 5.15822L2.5 14.3749ZM17.2583 5.86655C17.5833 5.54155 17.5833 5.01655 17.2583 4.69155L15.3083 2.74155C14.9833 2.41655 14.4583 2.41655 14.1333 2.74155L12.6083 4.26655L15.7333 7.39155L17.2583 5.86655Z" fill="#84818A" />
        </svg>
    )
}