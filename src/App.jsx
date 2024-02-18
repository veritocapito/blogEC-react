import './App.css'
import Slider from './components/Slider'
import Footer from './components/Footer'
import NewsForm from './components/NewsForm'
import PostsList from './components/PostsList'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Slider />
        <PostsList />
      </main>
      <NewsForm />
      <Footer />
    </>
  )
}

export default App
