const blogPosts = [
  {
    title: "6 Strategies to Find Your Conference Keynote and Other Speakers",
    description:
      "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
    date: "12 Mar",
    author: "Jhon Doe",
    imageUrl: "/blogs/Blog1.png",
  },
  {
    title:
      "How Successfully Used Paid Marketing to Drive Incremental Ticket Sales",
    description:
      "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
    date: "12 Mar",
    author: "Jhon Doe",
    imageUrl: "/blogs/Blog2.png",
  },
  {
    title:
      "Introducing Workspaces: Work smarter, not harder with new navigation",
    description:
      "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
    date: "12 Mar",
    author: "Jhon Doe",
    imageUrl: "/blogs/Blog3.png",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto py-10 px-24">
      <h1 className="text-4xl font-bold mb-2 text-center py-6">Blog</h1>
      <div className="flex flex-wrap justify-between">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full md:w-1/3 mb-8 px-4">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.description}</p>
            <p className="text-gray-500 mt-2">
              {post.date} - {post.author}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#F5167E] hover:bg-pink-700 text-white font-bold my-4 py-4 px-6 rounded-full">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blog;
