export type addressType = {
    id: string,
    title: string
    location: string,
    coords: [number, number]
    is_loadingPoint: boolean //является ли адрес точкой погрузки, если нет, то это точка разгрузки
}
export type routingType = {
    id: string
    application_number: string
    loading_point: string,
    unloading_point: string
}

export type pointsType = { [key: string]: addressType }

type dataType = {
    points: pointsType,
    applications: routingType[]
}


export const data: dataType = {
    points: {
        'Airport_SHRM': {
            id: '1_LP',
            title: 'Аэропорт Шереметьево',
            location: 'Россия, Московская область, Химки, Шереметьевское шоссе, вл37',
            coords: [55.981349, 37.413861],
            is_loadingPoint: true
        },
        'Airport_DMD': {
            id: '2_LP',
            title: 'Аэропорт Домодедово',
            location: 'Россия, Московская область, городской округ Домодедово, аэропорт Домодедово имени М.В. Ломоносова, 1',
            coords: [55.414348, 37.900488],
            is_loadingPoint: true
        },
        'Airport_VNKV': {
            id: '3_LP',
            title: 'Аэропорт Внуково',
            location: 'Россия, Москва, посёлок Внуково, 2-я Рейсовая улица, 2к5',
            coords: [55.605058, 37.286292],
            is_loadingPoint: true
        },
        'Warehouse_Beskudnikovsky': {
            id: '4_LP',
            title: 'Склад на Бескудниковском б.',
            location: 'Россия, Москва,Бескудниковский бульвар, 46к1',
            coords: [55.873829, 37.543857],
            is_loadingPoint: true
        },
        'Warehouse_Warsaw_hw': {
            id: '5_LP',
            title: 'Склад на Варшавском ш.',
            location: 'Россия, Москва, Варшавское шоссе, 168',
            coords: [55.582925, 37.581164],
            is_loadingPoint: true
        },
        'Warehouse_Kutuzovsky': {
            id: '12_LP',
            title: 'Склад на Кутузовском',
            location: 'Россия, Москва, Кутузовский проспект, 30',
            coords: [55.74148, 37.535835],
            is_loadingPoint: true
        },
        'WB_1_Kazenny_Lane': {
            id: '6_LP',
            title: 'Пункт WB, Казённый пер. 10с2',
            location: 'Россия, Москва, Большой Казённый переулок, 10с2',
            coords: [55.759902, 37.656424],
            is_loadingPoint: false
        },
        'WB_2_Tverskaya': {
            id: '7_LP',
            title: 'Пункт WB, Тверская-Ямская',
            location: 'Россия, Москва, 1-я Тверская-Ямская улица, 28',
            coords: [55.775084, 37.588018],
            is_loadingPoint: false
        },
        'WB_3_Dyhovskoy_per': {
            id: '8_LP',
            title: 'Пункт WB, Духовской пер., 16',
            location: 'Россия, Москва, Духовской переулок, 16',
            coords: [55.705777, 37.616926],
            is_loadingPoint: false
        },
        'OZN_1_Afonasevskyi': {
            id: '9_LP',
            title: 'Пункт OZN, Б.Афанасьевский пер.,36',
            location: 'Россия, Москва, Большой Афанасьевский переулок, 36с1',
            coords: [55.75094, 37.59745],
            is_loadingPoint: false
        },
        'OZN_2_Soldatskiy': {
            id: '10_LP',
            title: 'Пункт OZN, Солдатский пер.,10',
            location: 'Россия, Москва, Солдатский переулок, 10',
            coords: [55.76719, 37.705248],
            is_loadingPoint: false
        },
        'OZN_3_Sadovnicheskiy': {
            id: '11_LP',
            title: 'Пункт OZN на Садовнической,47',
            location: 'Россия, Москва, Садовническая улица, 47с1',
            coords: [55.743304, 37.639321],
            is_loadingPoint: false
        },
        'OZN_4_Bryanskaya': {
            id: '12_LP',
            title: 'Пункт OZN на Брянской,12',
            location: 'Россия, Москва, Брянская улица, 12',
            coords: [55.744799, 37.558445],
            is_loadingPoint: false
        }

    },
    applications: [
        {
            id: '1',
            application_number: 'VV12-03',
            loading_point: 'Airport_SHRM',
            unloading_point: 'WB_1_Kazenny_Lane'
        },
        {
            id: '2',
            application_number: 'VV14-05',
            loading_point: 'Airport_DMD',
            unloading_point: 'WB_2_Tverskaya'
        },
        {
            id: '3',
            application_number: 'VV14-75',
            loading_point: 'Warehouse_Warsaw_hw',
            unloading_point: 'OZN_2_Soldatskiy'
        },
        {
            id: '4',
            application_number: 'VR14-05',
            loading_point: 'Warehouse_Beskudnikovsky',
            unloading_point: 'OZN_2_Soldatskiy'
        },
        {
            id: '5',
            application_number: 'VR14-16',
            loading_point: 'Warehouse_Warsaw_hw',
            unloading_point: 'OZN_4_Bryanskaya'
        },
        {
            id: '6',
            application_number: 'VR14-19',
            loading_point: 'Warehouse_Warsaw_hw',
            unloading_point: 'WB_2_Tverskaya'
        },
        {
            id: '7',
            application_number: 'VR24-19',
            loading_point: 'Airport_DMD',
            unloading_point: 'OZN_4_Bryanskaya'
        },
        {
            id: '8',
            application_number: 'VR14-13',
            loading_point: 'Warehouse_Kutuzovsky',
            unloading_point: 'OZN_2_Soldatskiy'
        },
        {
            id: '9',
            application_number: 'VH19-13',
            loading_point: 'Airport_SHRM',
            unloading_point: 'WB_1_Kazenny_Lane'
        },
        {
            id: '10',
            application_number: 'VH19-93',
            loading_point: 'Warehouse_Beskudnikovsky',
            unloading_point: 'WB_3_Dyhovskoy_per'
        },
        {
            id: '11',
            application_number: 'VH21-93',
            loading_point: 'Warehouse_Kutuzovsky',
            unloading_point: 'WB_3_Dyhovskoy_per'
        },
        {
            id: '13',
            application_number: 'VN33-93',
            loading_point: 'Warehouse_Kutuzovsky',
            unloading_point: 'WB_1_Kazenny_Lane'
        },
        {
            id: '14',
            application_number: 'VN63-93',
            loading_point: 'Airport_DMD',
            unloading_point: 'WB_2_Tverskaya'
        },
        {
            id: '15',
            application_number: 'VH45-97',
            loading_point: 'Warehouse_Warsaw_hw',
            unloading_point: 'OZN_4_Bryanskaya'
        },
        {
            id: '16',
            application_number: 'VL11-93',
            loading_point: 'Airport_SHRM',
            unloading_point: 'WB_3_Dyhovskoy_per'
        },
        {
            id: '17',
            application_number: 'VJ22-99',
            loading_point: 'Warehouse_Beskudnikovsky',
            unloading_point: 'OZN_4_Bryanskaya'
        },
        {
            id: '18',
            application_number: 'VH17-95',
            loading_point: 'Warehouse_Warsaw_hw',
            unloading_point: 'OZN_1_Afonasevskyi'
        },
        {
            id: '19',
            application_number: 'VH17-94',
            loading_point: 'Warehouse_Kutuzovsky',
            unloading_point: 'WB_1_Kazenny_Lane'
        },
        {
            id: '20',
            application_number: 'VH11-91',
            loading_point: 'Warehouse_Warsaw_hw',
            unloading_point: 'OZN_1_Afonasevskyi'
        },
        {
            id: '21',
            application_number: 'VH11-00',
            loading_point: 'Warehouse_Beskudnikovsky',
            unloading_point: 'WB_1_Kazenny_Lane'
        },
    ]
}