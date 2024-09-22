import { PencilIcon } from '@heroicons/react/24/outline';
import { getBlogs } from '@/data/blogs.data';

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <section className="rounded-xl bg-white p-6 shadow print:p-0 print:shadow-none">
      <h3 className="mb-4 border-b-2 border-gray-100 pb-1 text-lg font-semibold print:mb-2 print:border-b print:text-sm">
        Blogs
      </h3>
      <div className="educationlist">
        {blogs.map((blog) => {
          return (
            <div
              key={blog.id}
              className="group mb-4 flex md:mt-6"
            >
              <a href={blog.link}>
                <div className="w-full space-y-2">
                  <div>
                    <h4 className="text-sm font-medium print:text-xs">
                      {blog.title}
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
