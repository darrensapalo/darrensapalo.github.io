<template>
  <div class="home">
    <div class="off-color named section">Darren Sapalo</div>
    <div class="off-color description welcome section">
      <label>Tech Consultant</label>
      <p>I help you solve problems, design solutions, and realize them.</p>
      <div @click="contactMe" class="button">Let's talk!</div>
    </div>

    <div class="professional section">
      <h1>Solve Problems</h1>
      <p>
        I perform user research to identify what problems you encounter
        and to evaluate their different priorities, so we can tackle them
        in the most effective sequence.
      </p>
      <h1>Design Solutions</h1>
      <p>
        Having analyzed your situation with technical expertise, I enumerate
        different options that your business can choose to go for, allowing
        you to decide what strategy is best for your current context.
      </p>
      <h1>Realize Ideas into Actuality</h1>
      <p>
        I build different kinds of things: websites, mobile apps, cross-platform
        solutions, desktop apps, software integrations, computer vision-based
        applications, language processing apps, data analysis and machine learning
        apps integrated into your workflow.
      </p>
    </div>

    <div class="off-color section">
      <h1>Portfolio</h1>
      <p>I do quite a few things: I write tech articles, I build open source projects.</p>
      <div class="portfolio-list">
        <div class="portfolio-item">
          <h2>
            <a
              href="https://hub.packtpub.com/reactive-programming-rxswift/"
            >Reactive Programming with RxSwift</a>
          </h2>
          <label>May 13, 2016</label>
          <p>In a previous article, Building an iPhone app Using Swift, Ryan Loomba showed us how to build iOS apps using Swift, starting from a new project (Building an iPhone app Using Swift Part 1), and how to create lists using a table view and present a map using map view (Building an iPhone app Using Swift Part 2). In this article, we’ll discuss what RxSwift is and how it can be used to improve our Swift code.</p>
        </div>

        <div class="portfolio-item">
          <h2>
            <a href="https://hub.packtpub.com/rxswift-operators/">RxSwift Operators</a>
          </h2>
          <label>April 22, 2016</label>
          <p>In the previous article, we talked about how the Rx framework for Swift could help in performing asynchronous tasks, creating an observable from a network request, dealing with streams of data,</p>
        </div>
        
        <div class="portfolio-item">
          <h2>
            There's a few more...
          </h2>
          <label></label>
          <p>I just haven't gotten to writing them down. There will be time for it later.</p>
        </div>
      </div>
    </div>

    <div class="contact section">
      <h1>
        Reach Me
      </h1>
      <div class="outgoing">
        
        <a href="https://www.linkedin.com/in/darren-karl-sapalo-3a384495/">
          <svg class="linkedin" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg"><g class="scaling-icon" style="fill-opacity: 1"><defs></defs><g class="bug-14dp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g class="dp-1"><path d="M14,1.25 L14,12.75 C14,13.44 13.44,14 12.75,14 L1.25,14 C0.56,14 0,13.44 0,12.75 L0,1.25 C0,0.56 0.56,0 1.25,0 L12.75,0 C13.44,0 14,0.56 14,1.25" class="bug-text-color" fill="#FFFFFF"></path><path d="M14,1.25 L14,12.75 C14,13.44 13.44,14 12.75,14 L1.25,14 C0.56,14 0,13.44 0,12.75 L0,1.25 C0,0.56 0.56,0 1.25,0 L12.75,0 C13.44,0 14,0.56 14,1.25 Z M5,5 L6.85,5 L6.85,6.016 L6.893,6.016 C7.259,5.541 8.018,4.938 9.25,4.938 C11.125,4.938 12,5.808 12,8 L12,12 L10,12 L10,8.75 C10,7.313 9.672,6.875 8.632,6.875 C7.5,6.875 7,7.75 7,9 L7,12 L5,12 L5,5 Z M2,12 L4,12 L4,5 L2,5 L2,12 Z M4.335,3 C4.335,3.737 3.737,4.335 3,4.335 C2.263,4.335 1.665,3.737 1.665,3 C1.665,2.263 2.263,1.665 3,1.665 C3.737,1.665 4.335,2.263 4.335,3 Z" class="background" fill="#0073B2"></path></g><g class="dpi-gt1" transform="scale(0.2917)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="46" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-21dp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g class="dp-1"><path d="M19.479,0 L1.583,0 C0.728,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.478,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0" class="bug-text-color" fill="#FFFFFF"></path><path d="M19.479,0 L1.583,0 C0.728,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.478,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0 Z M8,8 L10.827,8 L10.827,9.441 L10.858,9.441 C11.289,8.664 12.562,7.875 14.136,7.875 C17.157,7.875 18,9.479 18,12.45 L18,18 L15,18 L15,12.997 C15,11.667 14.469,10.5 13.227,10.5 C11.719,10.5 11,11.521 11,13.197 L11,18 L8,18 L8,8 Z M3,18 L6,18 L6,8 L3,8 L3,18 Z M6.375,4.5 C6.375,5.536 5.536,6.375 4.5,6.375 C3.464,6.375 2.625,5.536 2.625,4.5 C2.625,3.464 3.464,2.625 4.5,2.625 C5.536,2.625 6.375,3.464 6.375,4.5 Z" class="background" fill="#0077B5"></path></g><g class="dpi-gt1" transform="scale(0.4375)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="46" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-28dp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g class="dp-1"><path d="M25.375,0 L2.625,0 C1.175,0 0,1.175 0,2.625 L0,25.375 C0,26.825 1.175,28 2.625,28 L25.375,28 C26.825,28 28,26.825 28,25.375 L28,2.625 C28,1.175 26.825,0 25.375,0" class="bug-text-color" fill="#FFFFFF"></path><path d="M25.375,0 L2.625,0 C1.175,0 0,1.175 0,2.625 L0,25.375 C0,26.825 1.175,28 2.625,28 L25.375,28 C26.825,28 28,26.825 28,25.375 L28,2.625 C28,1.175 26.825,0 25.375,0 Z M14.8747,12.025 L14.8747,10 L10.9997,10 L10.9997,24 L14.9997,24 L14.9997,17.375 C14.9997,15.603 15.6627,13.875 17.6497,13.875 C19.4667,13.875 19.9997,14.965 19.9997,16.875 L19.9997,24 L23.9997,24 L23.9997,14.975 C23.9997,11.75 22.2917,9.875 19.0137,9.875 C16.9227,9.875 15.4487,11.025 14.8747,12.025 Z M4,24 L8,24 L8,10 L4,10 L4,24 Z M6,3.665 C4.71,3.665 3.665,4.71 3.665,6 C3.665,7.29 4.71,8.335 6,8.335 C7.29,8.335 8.335,7.29 8.335,6 C8.335,4.71 7.29,3.665 6,3.665 Z" class="background" fill="#0077B5"></path></g><g class="dpi-gt1" transform="scale(0.5833)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="46" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-34dp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g class="dp-1"><path d="M2.8,34 L31.2,34 C32.746,34 34,32.746 34,31.2 L34,2.8 C34,1.254 32.746,0 31.2,0 L2.8,0 C1.254,0 0,1.254 0,2.8 L0,31.2 C0,32.746 1.254,34 2.8,34" class="bug-text-color" fill="#FFFFFF"></path><path d="M2.8,34 L31.2,34 C32.746,34 34,32.746 34,31.2 L34,2.8 C34,1.254 32.746,0 31.2,0 L2.8,0 C1.254,0 0,1.254 0,2.8 L0,31.2 C0,32.746 1.254,34 2.8,34 Z M13,13 L17.75,13 L17.75,15.391 C18.387,14.114 20.242,12.75 22.695,12.75 C27.397,12.75 29,14.875 29,19.922 L29,29 L24,29 L24,20.984 C24,18.328 23.481,16.875 21.542,16.875 C18.921,16.875 18,18.867 18,20.984 L18,29 L13,29 L13,13 Z M5,29 L10,29 L10,13 L5,13 L5,29 Z M10.55,7.5 C10.55,9.184 9.184,10.55 7.5,10.55 C5.816,10.55 4.45,9.184 4.45,7.5 C4.45,5.815 5.816,4.45 7.5,4.45 C9.184,4.45 10.55,5.815 10.55,7.5 Z" class="background" fill="#0077B5"></path></g><g class="dpi-gt1" transform="scale(0.7083)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="46" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-40dp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g class="dp-1"><path d="M40,3.5 L40,36.5 C40,38.434 38.434,40 36.5,40 L3.5,40 C1.566,40 0,38.434 0,36.5 L0,3.5 C0,1.566 1.566,0 3.5,0 L36.5,0 C38.434,0 40,1.566 40,3.5 L40,3.5 Z" class="bug-text-color" fill="#FFFFFF"></path><path d="M40,3.5 L40,36.5 C40,38.434 38.434,40 36.5,40 L3.5,40 C1.566,40 0,38.434 0,36.5 L0,3.5 C0,1.566 1.566,0 3.5,0 L36.5,0 C38.434,0 40,1.566 40,3.5 Z M15,15.0000122 L20.875,15.0000122 L20.875,18.3330122 C21.542,17.1460122 23,14.7000122 26.957,14.7000122 C33.137,14.7000122 34,18.6800122 34,23.9670122 L34,34.0000122 L28,34.0000122 L28,25.0180122 C28,22.1830122 27.542,19.8750122 24.922,19.8750122 C21.75,19.8750122 21,21.9560122 21,24.5160122 L21,34.0000122 L15,34.0000122 L15,15.0000122 Z M6,34 L12,34 L12,15 L6,15 L6,34 Z M12.6509756,8.99997559 C12.6509756,11.0159756 11.0169756,12.6499756 9.00097559,12.6499756 C6.98397559,12.6499756 5.34997559,11.0159756 5.34997559,8.99997559 C5.34997559,6.98397559 6.98397559,5.34997559 9.00097559,5.34997559 C11.0169756,5.34997559 12.6509756,6.98397559 12.6509756,8.99997559 Z" class="background" fill="#0077B5"></path></g><g class="dpi-gt1" transform="scale(0.8333)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="46" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-48dp" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="46" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g></svg>
        </a>
        <a href="https://github.com/darrensapalo/">
          <svg class="octicon octicon-mark-github v-align-middle" height="48" viewBox="0 0 16 16" version="1.1" width="48" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
        <a href="https://gitlab.com/darrensapalo">
          <svg width="48" height="48" class="tanuki-logo" viewBox="0 0 36 36">
            <path class="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"></path>
            <path class="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"></path>
            <path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"></path>
            <path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"></path>
            <path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"></path>
            <path class="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"></path>
            <path class="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"></path>
          </svg>
        </a>
        <a href="https://stackoverflow.com/users/1323398/iwillnot">
          <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path class="st0" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"/><path class="st1" d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"/></svg>
        </a>
      </div>
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
export default class Home extends Vue {
  public contactMe() {
    window.location.href = 'https://www.linkedin.com/in/darren-karl-sapalo-3a384495/';
  }
}
</script>

<style lang="scss" scoped>

.st0{fill:#bcbbbb}
.st1{fill:#f48023}


$primary-color: #17657a;
$secondary-color: #3b636e;

$background: #ffffff;
$background-off: #fafafa;

.section {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 50%;
  }
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Noto Serif", sans-serif;
  font-weight: 400;
}

.off-color {
  background: $background-off;
}

.description {
  padding: 1rem 0;
}

.named {
  font-size: 4rem;
  font-family: "Noto Serif", sans-serif;
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
  font-size: 1.5rem;
  padding: 0.5rem 3rem;
  border-radius: 15px;
  background: $primary-color;
  color: white;
  margin: 1rem 0 2rem 0;
  cursor: pointer;
  user-select: none;
}

svg.linkedin {
  width: 48px;
  height: 48px;
}

div.outgoing {
  margin-top: 2rem;
  display: flex;
  a:not(:last-child) {
    margin-right: 2rem;
  }
}
</style>
