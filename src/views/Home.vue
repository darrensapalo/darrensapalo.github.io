<template>
  <div class="home">
    <div class="named section">
      Darren Sapalo
    </div>
    <div class="welcome section">
      <label>
        Tech Consultant
      </label>
      <p>
        I help you solve problems, design solutions, and realize them.
      </p>
      <div class="button">
        Let's talk!
      </div>
    </div>

    <div class="professional section">
      <h1>
        Solve Problems
      </h1>
      <p>
        I perform user research to identify what problems you encounter
        and to evaluate their different priorities, so we can tackle them
        in the most effective sequence.
      </p>
      <h1>
        Design Solutions
      </h1>
      <p>
        Having analyzed your situation with technical expertise, I enumerate
        different options that your business can choose to go for, allowing
        you to decide what strategy is best for your current context.
      </p>
      <h1>
        Realize Ideas into Actuality
      </h1>
      <p>
        I build different kinds of things: websites, mobile apps, cross-platform
        solutions, desktop apps, software integrations, computer vision-based 
        applications, language processing apps, data analysis and machine learning
        apps integrated into your workflow.
      </p>
    </div>

    <div class="portfolio section">
      <h1>Portfolio</h1>
      <p>
        I do quite a few things: I write tech articles, I build open source projects.
      </p>
      <div class="portfolio-list">

        <div class="portfolio-item">
        <h2>
          <a href="https://hub.packtpub.com/reactive-programming-rxswift/">
            Reactive Programming with RxSwift
          </a>
        </h2>
          <label>
            May 13, 2016
          </label>
          <p>
            In a previous article, Building an iPhone app Using Swift, Ryan Loomba showed us how to build iOS apps using Swift, starting from a new project (Building an iPhone app Using Swift Part 1), and how to create lists using a table view and present a map using map view (Building an iPhone app Using Swift Part 2). In this article, we’ll discuss what RxSwift is and how it can be used to improve our Swift code.
          </p>
        </div>

        <div class="portfolio-item">
        <h2>
          <a href="https://hub.packtpub.com/rxswift-operators/">
            RxSwift Operators
          </a>
        </h2>
          <label>
            April 22, 2016
          </label>
          <p>
            In the previous article, we talked about how the Rx framework for Swift could help in performing asynchronous tasks, creating an observable from a network request, dealing with streams of data,
          </p>
        </div>
      </div>
    </div>

    <div class="contact screen">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

$primary-color: #17657a;
$secondary-color: #3b636e;

$background: #FFFFFF;
$background-off: #FAFAFA;

.section {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    max-width: 50%;
  }
}

h1, h2, h3, h4, h5 {
  font-family: 'Noto Serif', sans-serif;
  font-weight: 400;
}

.home {
  background: $background-off;
  overflow: scroll-y;
  
}

.named {
  font-size: 4rem;
  font-family: 'Noto Serif', sans-serif;
  padding: 0.5rem 0;
}

.welcome {
  padding: 0.5rem 0;
  label {
    font-size: 2rem;
  }
}

.professional {
  background: $background;
  
}

.portfolio {
  margin: 0 auto;
}

.portfolio-list {
    max-width: 50%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

.portfolio-item {

  margin: 0 auto;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  padding: 10px;

  h2 {
    font-size: 1.2rem;
  }

  label {
    display: block;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-sizing: border-box;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
}

a {
  color: $primary-color;
}

a:visited {
  color: $secondary-color;
}

.button {
  font-size: 2rem;
  padding: 1rem 4rem;
  border-radius: 15px;
  background: $primary-color;
  color: white;
  margin: 1rem;
  cursor: pointer;
  user-select: none;
}
</style>
