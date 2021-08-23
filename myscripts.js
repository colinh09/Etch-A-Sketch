const heading = document.querySelector("#header")

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.style.fontSize = 100;
h1.style.cssText = "color: black";
h1.style.textAlign = "center";
h1.textContent = "Etch-A-Sketch by Colin Hwang";
heading.appendChild(h1);

const container = document.createElement("#container");

const grid = document.createElement("#grid");

function createGrid(size)
{
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++)
    {
        let div = document.createElement("div");
        div.classList.add('cell');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        grid.appendChild(div);
    }
}

container.appendChild(grid);

createGrid(16);


