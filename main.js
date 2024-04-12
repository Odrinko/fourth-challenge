import { controller } from './src/controller';
import './styles/main.scss';
import { faqRender } from './view/render-faq';

const element = document.querySelector('#app');

const app = (element) => {
  faqRender(element);
  controller(element);
}

app(element);