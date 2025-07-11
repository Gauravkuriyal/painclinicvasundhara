import BlogsHeroSection from "@/components/blogs/blogHeroSection";
import BlogListSection from "@/components/blogs/blogsList";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";

export default function BlogPage(){

    return <>
    <Header />
    <BlogsHeroSection />
    <BlogListSection />
    <Footer />
    </>
}