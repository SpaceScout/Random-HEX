function SetRandomColor()
{
    let zag2 = document.getElementById("zag2")
    zag2.innerHTML = "Сейчас HEX: " + GenerateRandomColor()
    document.body.style.background = GenerateRandomColor()
}

function GenerateRandomColor()
{
    let letters = "0123456789ABCDEF"
    let color  = "#"
    for(let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color)
    }
    return color
}