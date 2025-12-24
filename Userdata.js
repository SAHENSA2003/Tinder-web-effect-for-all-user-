const DummyInterest = [
    {
        interest: "Content",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff"><path d="M1 2V5H3V4H5V9H3.5V11H8.5V9H7V4H9V5H11V2H1ZM21 3H14V5H20V19H4V14H2V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3Z"></path></svg>`
    },
    {
        interest: "Music",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="white">
                                    <path
                                        d="M20 3V17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17C12 14.7909 13.7909 13 16 13C16.7286 13 17.4117 13.1948 18 13.5351V5H9V17C9 19.2091 7.20914 21 5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C5.72857 13 6.41165 13.1948 7 13.5351V3H20ZM5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19ZM16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z">
                                    </path>
                                </svg>`
    },
    {
        interest: "Artist",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg>`
    },
    {
        interest: "Singer",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path></svg>`
    },
    {
        interest: "Photography",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 9.46243 8.96243 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 15.5376 15.0376 18 12 18ZM12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z"></path></svg>`
    },
    {
        interest: "Travel",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff"><path d="M6.9641 3H17.0359C17.2844 4.722 18.7602 6 20.5 6C20.8322 6 21.1626 5.95271 21.4815 5.85956C21.2972 7.64386 19.7938 9 18 9H6C4.20622 9 2.7028 7.64386 2.51852 5.85957C2.83736 5.95271 3.16783 6 3.5 6C5.23985 6 6.71555 4.722 6.9641 3ZM22.9786 11.1114C22.5422 11.3591 22.0376 11.5005 21.5 11.5005C20.3896 11.5005 19.4201 10.8972 18.9013 10.0005H5.09865C4.57994 10.8972 3.61042 11.5005 2.5 11.5005C1.96237 11.5005 1.45778 11.3591 1.02138 11.1114C1.00725 11.2391 1 11.369 1 11.5005C1 12.8967 1.81753 14.1019 3 14.6637V21H9V19C9 17.3431 10.3432 16 12 16C13.6569 16 15 17.3431 15 19V21H21V14.6637C22.1825 14.1019 23 12.8967 23 11.5005C23 11.369 22.9927 11.2391 22.9786 11.1114Z"></path></svg>`
    },
    {
        interest: "Teaching",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM6 9C5.44772 9 5 9.44772 5 10V14H7V10C7 9.44772 6.55228 9 6 9ZM19 5H10V3H20C20.5523 3 21 3.44772 21 4V15C21 15.5523 20.5523 16 20 16H16.5758L19.3993 22H17.1889L14.3654 16H10V14H19V5Z"></path></svg>`
    },
    {
        interest: "Fitness",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff"><path d="M4 16V20H8V22H2V16H4ZM22 16V22H16V20H20V16H22ZM7.5 7C7.5 9.1416 8.99603 10.9338 11 11.3885L11 17H13L13.001 11.3883C15.0045 10.9332 16.5 9.14125 16.5 7H18.5C18.5 9.50729 17.0804 11.683 15.0011 12.7672L15 19H9L8.99992 12.7677C6.92007 11.6837 5.5 9.50769 5.5 7H7.5ZM12 5C13.3807 5 14.5 6.11929 14.5 7.5C14.5 8.88071 13.3807 10 12 10C10.6193 10 9.5 8.88071 9.5 7.5C9.5 6.11929 10.6193 5 12 5ZM8 2V4L4 3.999V8H2V2H8ZM22 2V8H20V4H16V2H22Z"></path></svg>`
    },
    {
        interest: "Driving",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM8 13L4.06201 13.001C4.51365 16.6192 7.38163 19.4869 11 19.9381V16C9.34315 16 8 14.6569 8 13ZM19.938 13.001L16 13C16 14.6569 14.6569 16 13 16L13.001 19.938C16.6189 19.4864 19.4864 16.6189 19.938 13.001ZM14 12H10V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V12ZM12 4C7.92037 4 4.55396 7.05371 4.06189 11H8C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11H19.9381C19.446 7.05371 16.0796 4 12 4Z"></path></svg>`
    },
    {
        interest: "Gaming",
        icon: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffff"><path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM18 13H16V15H18V13ZM16 9H14V11H16V9Z"></path></svg>`
    },
];



let user = [
    {
        ProfilePicture: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        DisplayPicture: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        PendingMessage: 9,
        location: "Canada, Toronto",
        Name: "Sofia",
        Age: "25",
        Bio: "Enjoys dancing and teaching dance classes to kids. Loves trying out new cuisines, attending music concerts, and capturing cityscapes with her camera.",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]

    },
    {
        ProfilePicture: "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        DisplayPicture: "https://images.unsplash.com/photo-1568038479111-87bf80659645?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        PendingMessage: 11,
        location: "UK, London",
        Name: "Zinia",
        Age: "30",
        Bio: "Avid gamer who streams regularly and explores new indie games. Passionate about photography, cycling, and experimenting with creative cooking ideas.",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]
    },
    {
        ProfilePicture: "https://plus.unsplash.com/premium_photo-1729627739892-2db01aadadc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        DisplayPicture: "https://plus.unsplash.com/premium_photo-1681494630816-6711406f51f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        PendingMessage: 7,
        location: "Australia, Sydney",
        Name: "Mia",
        Age: "28",
        Bio: "Loves singing and writing original songs. Enjoys baking, painting, and spending free time exploring photography and hiking trails around the city.",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]
    },
    {
        ProfilePicture: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        DisplayPicture: "https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        PendingMessage: 12,
        location: "USA , California",
        Name: 'Henry',
        Age: '28',
        Bio: "Passionate about photography and documenting travel stories. Loves gaming with friends, cooking traditional meals, and attending dance workshops on weekends.",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]
    },
    {
        ProfilePicture: 'https://plus.unsplash.com/premium_photo-1764107149567-5f0e1eb2a9b5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://plus.unsplash.com/premium_photo-1764107149576-3e9707c4ff5e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        PendingMessage: 7,
        location: "USA, New York",
        Name: "Liam",
        Age: "26",
        Bio: "Works in product support and enjoys helping people solve problems. Spends weekends exploring coffee shops and learning photography.",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]
    },
    {
        ProfilePicture: 'https://plus.unsplash.com/premium_photo-1762456150793-410bcdcc1573?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://plus.unsplash.com/premium_photo-1762456150958-d0aefc32ce03?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        PendingMessage: 3,
        location: "UK, London",
        Name: "Hossen",
        Age: "36",
        Bio: "Junior designer who loves simple layouts and clean colors. Reads mystery books at night and travels whenever she gets a chance.",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]
    },
    {
        ProfilePicture: 'https://plus.unsplash.com/premium_photo-1758362639098-9c9b10da1da3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://plus.unsplash.com/premium_photo-1758362067068-8223da72f0bb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        PendingMessage: 15,
        location: "Canada, Toronto",
        Name: "Noah",
        Age: "29",
        Bio: "Software tester who enjoys improving workflows. Big fan of cycling and early morning runs to clear his mind.",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]
    },
    {
        ProfilePicture: 'https://images.unsplash.com/photo-1638793744678-f8340a5425d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1638792736504-a39ae8d2785d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        PendingMessage: 9,
        location: "Australia, Sydney",
        Name: "Mia",
        Age: "27",
        Bio: "Works at a local NGO and loves community events. Learns new languages for fun and enjoys quiet beaches.",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]
    },
    {
        ProfilePicture: 'https://images.unsplash.com/photo-1642415284548-d3e09ed815ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1632635604193-e46310cd411b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        PendingMessage: 4,
        location: "USA, Texas",
        Name: "Ethan",
        Age: "30",
        Bio: "A good singer. His voice is just like a Koel, Famous for it's fashion designing and good looking , ",
        isFriend: null,
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ]
    },

    {
        ProfilePicture: '',
        DisplayPicture: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 11,
        location: "UK, London",
        Name: "Lucas",
        Age: "30",
        Bio: "Avid gamer who streams regularly and explores new indie games. Passionate about photography, cycling, and experimenting with creative cooking ideas.",
        isFriend: null

    },
    {
        ProfilePicture: 'https://images.unsplash.com/photo-1610913194887-0674ceb757d5?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1611837881052-ab692b8b35e7?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 5,
        location: "Germany, Berlin",
        Name: "Avana",
        Age: "29",
        Bio: "Passionate about photography and documenting travel stories. Loves gaming with friends, cooking traditional meals, and attending dance workshops on weekends.",
        isFriend: null

    },
    {
        ProfilePicture: 'https:images.unsplash.com/photo-1718356190722-1c3508e08078?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1723417553405-0211ad4e7d12?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 16,
        location: "France, Paris",
        Name: "Noah",
        Age: "27",
        Bio: "Singer and songwriter who enjoys performing in small venues. Loves experimenting with cooking, exploring local photography spots, and casual gaming sessions.",
        isFriend: null
    },
    {
        ProfilePicture: 'https://images.unsplash.com/photo-1507612869432-28bf856d0818?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1507610915667-66f4ca63ffc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 8,
        location: "Japan, Tokyo",
        Name: "Hana",
        Age: "24",
        Bio: "A creative soul passionate about dance and choreography. Enjoys cooking, photography, playing video games, and learning new musical instruments in free time.",
        isFriend: null

    },
    {
        ProfilePicture: 'https://images.unsplash.com/photo-1642541724185-0aa9df1ac389?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1642541724183-40c7581a6abc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 10,
        location: "USA, Chicago",
        Name: "Owen",
        Age: "31",
        Bio: "Gaming enthusiast who streams strategy games online. Loves cooking exotic dishes, taking photography trips, and attending live music and dance performances.",
        isFriend: null

    },
    {
        ProfilePicture: 'https://images.unsplash.com/photo-1642541724193-8ff0e7cbafa0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1642541724192-4f2f6bcb042a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 6,
        location: "USA, Seattle",
        Name: "Logan",
        Age: "28",
        Bio: "Enjoys singing at open mic nights and experimenting with home-cooked fusion dishes. Spends weekends gaming, exploring new photography spots, and attending small music events.",
        isFriend: null
    },
    {
        ProfilePicture: 'https://images.unsplash.com/photo-1666143923404-75e5b6ee25e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1657000625935-9ff8fd6e7b04?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 12,
        location: "UK, Manchester",
        Name: "Ava",
        Age: "26",
        Bio: "Loves dancing and practicing new choreography styles. Enjoys cooking comfort food, capturing portraits with her camera, and playing casual games after work.",
        isFriend: null
    },
    {
        ProfilePicture: 'https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 9,
        location: "Canada, Vancouver",
        Name: "Dylan",
        Age: "30",
        Bio: "Passionate about photography and city exploration. Enjoys singing with friends, trying new recipes, and winding down with strategy and story-based games.",
        isFriend: null
    },
    {
        ProfilePicture: 'https://images.unsplash.com/photo-1621332244225-1128f8ea8588?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://images.unsplash.com/photo-1623877805361-0f486b520034?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 14,
        location: "Australia, Brisbane",
        Name: "Zara",
        Age: "25",
        Bio: "Cooking lover who experiments with desserts and snacks. Enjoys dancing, taking creative photos, gaming with friends, and attending live singing events.",
        isFriend: null
    },
    {
        ProfilePicture: 'https://plus.unsplash.com/premium_photo-1678197937503-65c81218402d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        DisplayPicture: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D,',
        Status: [
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] },
            { ...DummyInterest[Math.floor(Math.random() * DummyInterest.length)] }
        ],
        PendingMessage: 11,
        location: "Germany, Hamburg",
        Name: "Felix",
        Age: "29",
        Bio: "Enjoys photography and exploring nature trails for creative shots. Loves singing casually, learning new dishes, and spending evenings playing online games.",
        isFriend: null
    },


];
export default user;