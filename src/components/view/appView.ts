import News from './news/news';
import Sources from './sources/sources';
import { NewsItem } from './news/news'; // Импорт интерфейса NewsItem
import { SourceItem } from './sources/sources'; // Импорт интерфейса SourceItem

// Интерфейс для данных новости
interface NewsData {
    articles: NewsItem[];
}

// Интерфейс для данных источников
interface SourcesData {
    sources: SourceItem[];
}

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
