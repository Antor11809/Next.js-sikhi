import Post from "../component/post";


const Blogspage = () => {


const blogsdata = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    author: "John Doe",
    category: "Next.js",
    description: "Learn the basic concepts of Next.js and how to build modern web applications."
  },
  {
    id: 2,
    title: "Understanding React Components",
    author: "Sarah Khan",
    category: "React",
    description: "A simple guide to understanding components, props, and reusable UI in React."
  },
  {
    id: 3,
    title: "Why TypeScript is Useful",
    author: "Alex Smith",
    category: "TypeScript",
    description: "Discover how TypeScript helps you write safer and more maintainable code."
  },
  {
    id: 4,
    title: "Tailwind CSS for Beginners",
    author: "Mia Rahman",
    category: "CSS",
    description: "Learn how to style your websites quickly using Tailwind CSS utility classes."
  },
  {
    id: 5,
    title: "Understanding API and Data Fetching",
    author: "David Lee",
    category: "JavaScript",
    description: "Learn how APIs work and how to fetch and display data in your application."
  }
];


    return (
        <div>
            <h2>Blogs page</h2>
            {
              blogsdata.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Blogspage;