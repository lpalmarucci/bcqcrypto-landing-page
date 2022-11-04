export default {
    initial: {
      opacity: 0
    },
    transition: {
      type: "ease",
      duration: 1,
    },
    viewport: {
        once: true,
        amount: "all"
    },
    whileInView:{
        opacity: 1
    }
}