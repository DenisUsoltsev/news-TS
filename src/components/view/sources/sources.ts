import './sources.css';

// Интерфейс для данных источника
export interface SourceItem {
    id: string;
    name: string;
}

class Sources {
    // Метод для отрисовки источников
    draw(data: SourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        // Перебираем источники и клонируем шаблон
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const nameElement = sourceClone.querySelector('.source__item-name') as HTMLElement;
            nameElement.textContent = item.name;

            const sourceElement = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceElement.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources') as HTMLElement;
        sourcesContainer.append(fragment);
    }
}

export default Sources;
