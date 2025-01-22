import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsItem } from '../view/news/news'; // Импорт интерфейса NewsItem
import { SourceItem } from '../view/sources/sources'; // Импорт интерфейса SourceItem

// Интерфейс для данных новости
interface NewsData {
    articles: NewsItem[];
}

// Интерфейс для данных источников
interface SourcesData {
    sources: SourceItem[];
}

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const newElement = document.querySelector('.sources');

        if (newElement) {
            newElement.addEventListener('click', (e: Event) => 
                this.controller.getNews(e, (data: NewsData) =>
                    this.view.drawNews(data)));
        }
        
        this.controller.getSources((data: SourcesData) => this.view.drawSources(data));
    }
}

export default App;
