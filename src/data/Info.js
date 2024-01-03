const StoredProjects = [
  {
    id: 1,
    name: "The Travellers Bucket-List",
    type: "Individual",
    language: "Python",
    link: "https://github.com/samjaygill/Samanthas_First_Project",
    image: ["https://i.ibb.co/v3dScYS/Screenshot-2023-10-07-at-13-30-57.png"],
    video: "https://www.youtube.com/embed/RezKYXbhzOs",
    bio: "This project marked my initial endeavour following the completion of the Python module. It felt rewarding to consolidate all the knowledge I had acquired in Python. I utilized Flask for deploying the application and employed SQL as the database. The project itself is a Traveler's Bucket List application, which enables users to perform various actions such as browsing all destinations, viewing specific destinations, removing destinations, adding new ones, and searching for specific destinations.",
  },
  {
    id: 2,
    name: "Gillies Hotel",
    type: "Individual",
    language: "Javascript",
    link: "https://github.com/samjaygill/Gillies_Hotel",
    image: ["https://i.ibb.co/Sm2hYdg/Gillies-hotel.jpg"],
    video: "https://www.youtube.com/embed/AajbK2EdwMw",
    bio: "This marked my initial project within the Javascript module. It was quite satisfying to employ React for deploying this project, allowing for immediate visibility of any changes. Notably, this project doesn't involve a database. The project itself serves as a Hotel application, offering users the ability to peruse all bookings, verify a user's check-in status, make new bookings, and remove existing bookings.",
  },
  {
    id: 3,
    name: "Sizzle & Grill Aromatic Recipes",
    type: "Group",
    language: "Javascript",
    url: "https://sgar-recipes.vercel.app/",
    link: "https://github.com/samjaygill/Recipes_project",
    image: ["https://i.ibb.co/vzd02W6/Screen-Capture-014-SGAR-localhost.jpg"],
    video: "https://www.youtube.com/embed/_aXYjx17WDk?si=jKmWG2KSbqiKDcIs",
    bio: "This marked my initial project upon finishing the Javascript module and it also constituted my inaugural experience with a group project. We opted for React to launch the application and employed mongoDB as our database. The collaborative aspect and the presence of project deadlines were both beneficial aspects of this endeavour. As we couldn't locate an API containing all the desired information, we took the initiative to create our own API using seed data. The project itself functions as a recipe application, enabling users to peruse a collection of recipes, access individual recipes, bookmark recipes as favourites, compile ingredient lists for shopping, perform specific recipe searches, and even contribute their own recipes to the platform.",
  },
  {
    id: 4,
    name: "Wiggle Waggy Walks",
    type: "Group",
    language: "Javascript/Java",
    link: "https://github.com/samjaygill/Capstone_Client",
    image: [
      "https://i.ibb.co/5YbD2mJ/Screen-Capture-011-React-App-wiggle-waggy-walks-vercel-app.jpg",
    ],
    // video: "https://www.youtube.com/embed/kMmnZMFjXNU",
    bio: "Wiggle Waggy Walks, our captivating CodeClan capstone project, is a vibrant web application designed to bring together pet enthusiasts in a dynamic and engaging platform. With a seamless integration of React for the front end and Java Spring Boot for the backend, the application ensures a user-friendly experience. Firebase, allows our authentication and real-time messaging, which allows users to create accounts securely and connect with fellow pet lovers effortlessly. Within Wiggle Waggy Walks, users can explore detailed profiles showcasing their dogs and shared walking experiences. The platform facilitates connections by enabling users to invite each other for one-on-one walks, or to join and create group walks, fostering a sense of community. The real-time chat feature adds an extra layer of interaction, and the personalized dashboard provides insightful statistics on walks and miles covered. With dedicated dog profiles, an FAQ section, and intuitive profile management, Wiggle Waggy Walks stands as a comprehensive solution for pet enthusiasts seeking connection, activity, and a vibrant community to share their love for furry companions.",
  },
  {
    id: 5,
    name: "My Portfolio",
    type: "Individual",
    language: "Javascript",
    link: "https://github.com/samjaygill/my_portfolio",
    image: [
      "https://i.ibb.co/8s9Bbv9/Screen-Capture-010-Samantha-Gillies-samanthagillies-com.jpg",
    ],
    bio: 'Welcome to my digital showcase—your current view is my portfolio, meticulously crafted with React and JavaScript. This responsive website offers users a seamless experience to explore my projects, complete with convenient links to their respective GitHub repositories. Dive into the "About Me" section to get to know the mind behind the code, and feel free to drop me an email with any inquiries or collaborations. For a more detailed overview of my professional journey, you can peruse my current CV. My portfolio is designed to be both visually appealing and functionally efficient, reflecting my dedication to creating engaging and user-friendly web experiences. Explore, connect, and get a glimpse of the projects that define my coding journey—all right here on my React-powered portfolio.',
  },
  {
    id: 6,
    name: "Salary Calculator",
    type: "Individual",
    language: "Javascript",
    link: "https://github.com/samjaygill/salary_calculator",
    image: [
      "https://i.ibb.co/V2WGQdg/Screen-Capture-012-React-App-localhost.jpg",
    ],
    video: "https://www.youtube.com/embed/gRQd55ntG7o?si=I1elGua0KsgvBbq9",
    bio: "Introducing Salary Calculator, a fundamental React website crafted with JavaScript—a project borne out of my desire to refine various JavaScript skills. Salary Calculator provides a straightforward yet powerful tool for users to calculate their annual salary based on the hours worked and their hourly wage. It also offers the flexibility to determine hourly earnings by inputting weekly hours worked and annual salary. With a clean and intuitive interface, users can seamlessly input their data, empowering them to swiftly obtain accurate calculations for their annual and hourly income. Salary Calculator is a testament to the practical application of JavaScript skills, offering a user-friendly experience for individuals eager to gain quick insights into their financial scenarios.",
  },

  // ,
  // {
  //   id: 4,
  //   name: "Sizzle & Grill Aromatic Recipes 2",
  //   type: "Group",
  //   language: "Javascript",
  //   link: "https://github.com/samjaygill/S-GAR_Recipes",
  //   image:
  //     "https://i.ibb.co/YpyfBWy/Screen-Capture-009-React-App-localhost.jpg",
  //   video: "https://www.youtube.com/embed/q592yfLG738",
  //   bio:" This project represents a sequel to 'Sizzle & Grill Aromatic Recipes 1'. After completing the initial group project, I proceeded to make enhancements and rectify minor issues. These included resolving a problem where the placement image was not displaying correctly on individual recipes when added. Additionally, I improved the functionality related to vegan and vegetarian options by replacing it with a checkbox during the recipe addition process, resulting in better integration with the database."
  // },
];

export default StoredProjects;
