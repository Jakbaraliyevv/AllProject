import AboutComponents from "../../components/about";
import BookCard from "../../components/bookCard";
import Navbar from "../../components/navbar";
import Programming from "../../components/programming";
import Showcase from "../../components/showcase";
function Home() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <AboutComponents />
      <Programming />
      <BookCard />
    </div>
  );
}

export default Home;
