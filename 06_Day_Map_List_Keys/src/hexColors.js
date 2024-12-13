const hexColors = (numColors) =>
{
    let str = '0123456789abcdef'
    let colorCount = 0
    let colors = []
    while (colorCount < numColors)
    {
        let color = ''
        for(let i = 0; i < 6; i++)
        {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }

        colors.push('#' + color)
        colorCount++
    }

    return colors
}
export default hexColors