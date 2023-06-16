

const KegiatanContainer = document.querySelector('ul#isikegiatan')
fetch('kegiatan.json')
.then(Response => Response.json())
.then(data => {
    console.log(data)

    let isiHTML = ''
    data.forEach(element => {
        isiHTML += `
        <li>
            <a href="#">${element.title}</a>
            <small>${element.date}</small>
        </li>
        `
    });
    console.log(isiHTML)
    KegiatanContainer.innerHTML = isiHTML
})