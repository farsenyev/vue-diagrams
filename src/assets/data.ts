interface IRealTime {
    name: string;
    years: IRoundDiagram;
    operative: IBarChart;
    lastYear: ISecondIndicator;
}

interface IDC {
    name: string;
    numberOfAppearance: IStats;
    okbKCBakb: IBarChart;
    averageSKU: IStats;
    visitTT: IRoundDiagram;
}

interface IDistributors {
    name: string;
    grid: boolean;
    completeFEM: IStats;
    saleOut: IRoundDiagram;
    visitDistributive: IRoundDiagram;
    numberOfAppearance: IStats;
    mma: IBarChart;
    okbAKBtt: IBarChart;
}

interface ITerritory {
    name: string;
    chicago: IBarChart;
    availability: IBarChart;
}

interface IRoundDiagram {
    name: string;
    plan: number;
    done: number;
}

interface IBarChart {
    name: string;
    nums: INums[];
}

interface ISecondIndicator {
    name: string;
    subtitle: string;
}

interface IStats {
    name: string;
    nums: INums[];
}

interface INums {
    name: string;
    value: number;
    color: string;
}

export const RealTime: IRealTime = {
    name: 'Показатели в реальном времени',
    operative: {
        name: 'Оперативный',
        nums: [
            {
                name: 'План',
                value: 10,
                color: '#000'
            },
            {
                name: 'Факт',
                value: 13,
                color: '#e41335'
            }
        ]
    },
    years: {
        name: 'Годовой',
        plan: 60,
        done: 30,
    },
    lastYear: {
        name: 'За прошлый год',
        subtitle: '56'
    }
}

export const DistributionChannel: IDC = {
    name: 'Каналы сбыта',
    numberOfAppearance: {
        name: 'Количество участий по ТТ ПО ТМА',
        nums: [
            {
                name: 'План',
                value: 10,
                color: '#000'
            },
            {
                name: 'Факт',
                value: 13,
                color: '#e41335'
            }
        ],
    },
    okbKCBakb: {
        name: 'ОКБ->КЦБ->АКБ',
        nums: [
            {
                name: 'ОКБ',
                value: 7,
                color: '#000'
            },
            {
                name: 'КЦЮ',
                value: 5,
                color: '#000'
            },{
                name: 'АКБ',
                value: 8,
                color: '#e43135'
            },
        ]
    },
    averageSKU: {
        name: 'Среднее количество SKU',
        nums: [
            {
                name: '',
                value: 13,
                color: '#e41335'
            }
        ]
    },
    visitTT: {
        name: 'Посещение ТТ',
        plan: 60,
        done: 30
    }
}

export const Distributors: IDistributors = {
    name: 'Дистрибьюторы',
    grid: true,
    completeFEM: {
        name: 'Выполнение ФЭМ',
        nums: [
            {
                name: 'План',
                value: 14,
                color: '#000'
            },
            {
                name: 'Факт',
                value: 16,
                color: '#e41335',
            },
        ]
    },
    saleOut: {
        name: 'Посещение дистрибьютора',
        plan: 34,
        done: 31,
    },
    visitDistributive: {
        name: 'Продажи OUT',
        plan:66,
        done: 99,
    },
    numberOfAppearance: {
        name: 'Количество участий по ТТ',
        nums: [
            {
                name: 'Сколько шт',
                value: 16,
                color: "#000"
            },
            {
                name: 'SKU-разновидностей',
                value: 14,
                color: '#000'
            }
        ]
    },
    mma: {
        name: 'ММА',
        nums: [
            {
                name: 'План',
                value: 7,
                color: '#000'
            },
            {
                name: 'Факт',
                value: 8,
                color: '#e41335'
            }
        ]
    },
    okbAKBtt: {
        name: 'ОКБ->АКБ ТТ',
        nums: [
            {
                name: 'План',
                value: 17,
                color: '#000'
            },
            {
                name: 'Факт',
                value: 13,
                color: '#e41335'
            }
        ]
    },
}

export const Territory: ITerritory = {
    name: 'Территория',
    chicago: {
        name: 'Подключение к Чикаго',
        nums: [
            {
                name: 'План',
                value: 24,
                color: '#000',
            },
            {
                name: 'Факт',
                value: 31,
                color: '#e41335',
            }
        ]
    },
    availability:{
        name: 'Наличие дистрибьютора на территории',
        nums: [
            {
                name: 'План',
                value: 13,
                color: '#000',
            },
            {
                name: 'Факт',
                value: 12,
                color: '#e41335',
            }
        ],
    }
}
