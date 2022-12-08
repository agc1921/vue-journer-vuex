//reactivo y cuando se cambia se notifica o a los componentes donde se escuche el state

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores officiis sunt aspernatur corrupti",
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Nobis dolores officiis sunt aspernatur corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor Nobis dolores officiis sunt aspernatur corrupti.  sit amet consectetur adipisicing elit. ",
            picture: null,
        },
    ]
})