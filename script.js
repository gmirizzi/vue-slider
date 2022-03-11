const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

//ciclo per popolare l'array elements all'interno di data
elements = [];
for (let index = 0; index < 5; index++) {
    const item = {
        img: items[index],
        title: title[index],
        text: text[index]
    };
    elements.push(item)
}

const app = new Vue(
    {
        el: "#root",
        data: {
            activeIndex: 0,
            thumbs: elements
        },
        methods: {
            next() {
                if (this.activeIndex == this.thumbs.length - 1) {
                    this.activeIndex = 0
                } else {
                    this.activeIndex++
                }
            },
            previous() {
                if (this.activeIndex == 0) {
                    this.activeIndex = this.thumbs.length - 1
                } else {
                    this.activeIndex--
                }
            },
            autoScroll() {
                interval = setInterval(this.next, 3000)
            },
            stopAuto() {
                clearInterval(interval)
            }
        },
        created() {
            interval=setInterval(this.next, 3000)
        }
    }
)