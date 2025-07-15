import BlogDetailHeroSection from "@/components/blogs/blogDetailHeroSection";
import BlogDetailSection from "@/components/blogs/blogDetailSection";
import Footer from "@/components/utility/footer";
import Header from "@/components/utility/header";

export default async function BlogPage({ params }) {
    const { blogId } = await params;

    return <>
        <Header />
        <BlogDetailHeroSection title={"Understanding Chronic Pain: A Comprehensive Guide to Relief"} />
        <BlogDetailSection />
        <Footer />
    </>
}