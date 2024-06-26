import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import Header from "@/components/Header";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from "@/lib/getMovies";

export default async function Home() {

  const upcomingMovies = await getUpComingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  
  return (
    <main className="">
      {/* Carousel Banner Wrapper */}
      {/* <Header /> */}
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title='Upcoming' />
        <MoviesCarousel movies={topRatedMovies} title='Top Rated' />
        <MoviesCarousel movies={popularMovies} title='Popular' />
      </div>


    </main>
  );
}
