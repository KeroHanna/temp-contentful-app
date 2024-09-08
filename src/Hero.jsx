import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            corrupti, repellat earum voluptatem magni et eligendi. Quis
            voluptatibus quas pariatur itaque reprehenderit et numquam, eligendi
            facere ut animi ipsum esse.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" />
        </div>
      </div>
    </section>
  )
}

export default Hero
