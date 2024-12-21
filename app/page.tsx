import { Inter } from "next/font/google";
import Posts from "./components/Posts/views/Posts";
import PostsActionBar from "./components/Posts/views/PostsActionBar";
import { getPosts } from "./components/Posts/posts.api";
import { QueryClient } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: getPosts });

    return (
        <main
            className="w-screen h-screen flex items-center justify-center"
            style={inter.style}
        >
            <div className="w-[600px] h-[600px] flex flex-col gap-4">
                <div className="min-h-[65px] p-4 rounded-lg shadow-md">
                    <PostsActionBar />
                </div>
                <div className="min-h-[200px] p-4 rounded-2xl overflow-y-scroll shadow-md">
                    <Posts />
                </div>
            </div>
        </main>
    );
}
