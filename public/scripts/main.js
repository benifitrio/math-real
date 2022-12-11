const _url = "https://api.quran.sutanlab.id/surah/"
const homeContent = document.getElementById('content')

function Home() {
    homeContent.innerHTML =
        `<div class="w-full h-72 rounded-2xl overflow-hidden mt-4 shadow-2xl font-sans ">
      <div id="image" class="w-full  rounded-2xl h-full relative">
        <div class="absolute z-10 w-full text-center p-4 h-full top-16">
          <p class="text-white text-xl mb-1 font-bold writer"></p>
          <p class="text-sm italic text-white mb-3">"Mimpi boleh melangit tapi kaki harus membumi.  (Kang Emil)"</p>
        <a href="#baca-quran" class="bg-yellow-300 font-bold  py-1 px-4 rounded-xl shadow-md ">Baca sekarang <i class="text-xs fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
  <div class="mt-4 bold w-full font-sans">
    <h2 class="mb-2 text-xl font-bold dark:text-white ">Dashboard</h2>
    <div class="flex w-full">
      <a href="#baca-quran" class="block w-1/2 bg-white dark:bg-selfmode dark:text-white rounded shadow-xl mr-2 p-4 menu border">
      <div class="flex justify-center w-full">
      <img src="../images/materi.png" width="50" class="rounded-full">
      </div>
        <p class="mt-2 text-xl font-bold text-center">Materi</p>
        <p class="text-xs text-center">Lengkap beserta pembahasan soal</p>
      </a>
      <a href="#baca-doa" class="block w-1/2 bg-white dark:bg-selfmode dark:text-white rounded shadow-xl mr-2 p-4 menu border">
        <div class="flex justify-center w-full">
          <img src="../images/profile.png" width="50" class="rounded-full">
        </div>
        <p class="mt-2 text-xl font-bold text-center">Profil</p>
        <p class="text-xs text-center">Profil Penulis Media Aplikasi Web</p>
      </a>
    </div>
    <div class="flex w-full mt-2">
      <a href="#asmaul" class="block w-1/2 bg-white dark:bg-selfmode dark:text-white rounded shadow-xl mr-2 p-4 menu border">
      <div class="flex justify-center w-full">
      <img src="../images/PUSTAKA.png" width="50" class="rounded-full">
    </div>
    <p class="mt-2 text-xl font-bold text-center">Daftar Pustaka</p>
    <p class="text-xs text-center">Referensi yang digunakan</p>
      </a>
      <a href="#bacaan-shalat" class="block w-1/2 bg-white rounded dark:bg-selfmode dark:text-white shadow-xl mr-2 p-4 menu border">
      <div class="flex justify-center w-full">
        <img src="../images/petunjuk.png" width="55" class="rounded-full">
      </div>
        <p class="mt-2 text-xl font-bold text-center">Petunjuk</p>
        <p class="text-xs text-center">Petunjuk Penggunaan Aplikasi Web</p>
      </a>
    </div>
  </div>
  `

    const writer = document.querySelector('.writer')
    let txt = "Udah baca materi apa hari ini?"

    const typewriter = new Typewriter(writer, {
        loop: true,
        delay: 75,
    })
    typewriter
        .typeString(txt)
        .pauseFor(300)
        .deleteChars(10)
        .pauseFor(1000)
        .start();
}

const renderPage = async() => {
    let articlesHTML = "";
    homeContent.innerHTML = `
    <div class="mt-4 p-4 relative">
      <input id="search-surah" type="search" name="search"
        class="w-full p-3 focus:outline-none bg-white text-base rounded-lg mx-auto pl-12">
        <i class="fas fa-search absolute top-8 left-8 text-2xl"></i>
    </div>
    <div class="all-surah  p-4 mx-auto"></div>`;
    const allsurah = document.querySelector(".all-surah")
    allsurah.innerHTML += loaderTemplate()

    const Writerinput = document.getElementById('search-surah')

    const customNodeCreator = function(character) {
        // Add character to input placeholder
        Writerinput.placeholder = Writerinput.placeholder + character;

        // Return null to skip internal adding of dom node
        return null;
    }
    const typewriter = new Typewriter(null, {
        loop: false,
        delay: 75,
        onCreateTextNode: customNodeCreator,
    });

    typewriter
        .typeString('mau baca materi apa?')
        .pauseFor(300)
        .start();

    // try {
    //     if ("caches" in window) {
    //         caches.match(_url).then((response) => {
    //             if (response) {
    //                 response.json().then(function(data) {
    //                     console.log('succes get data in cache')
    //                     data.data.forEach(article => {
    //                         articlesHTML +=
    //                             `
    //               <div class="w-full mt-4 surah bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl">
    //                 <div data-id="${article.number}" class="w-full p-3 rounded-xl card surahId d-block">
    //                   <div class="flex prevent justify-around items-center mb-2">
    //                     <div class=" prevent surah-header rounded-full">
    //                       ${article.number}
    //                     </div>
    //                     <div class=" prevent surah-latin text-xl font-medium">
    //                       ${article.name.transliteration.id} : ${article.numberOfVerses } Ayat
    //                     </div>
    //                     <div class="prevent p-2">
    //                       <i class="prevent fas fa-heart"></i>
    //                     </div>
    //                   </div>
    //                   <div class=" prevent surah-body w-full text-right text-3xl mb-2">
    //                       ${article.name.short}
    //                   </div>
    //                   <hr>
    //                   <div class="prevent w-full text-right text-sm italic">
    //                       Artinya - ${article.name.translation.id}
    //                     </div>
    //                 </div>
    //               </div>`;
    //                     });
    //                 })
    //             }
    //         })
    //     }

    //     const response = await fetch(_url)
    //     const data = await response.json()

    //     data.data.forEach(article => {
    //         articlesHTML +=
    //             `
    //   <div class="w-full mt-4 surah bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl">
    //     <div data-id="${article.number}" class="w-full p-3 rounded-xl card surahId d-block">
    //       <div class="flex prevent justify-around items-center mb-2">
    //         <div class=" prevent surah-header rounded-full">
    //           ${article.number}
    //         </div>
    //         <div class=" prevent surah-latin text-xl font-medium">
    //           ${article.name.transliteration.id} : ${article.numberOfVerses } Ayat
    //         </div>
    //         <div class="prevent p-2">
    //           <i class="prevent fas fa-heart"></i>
    //         </div>
    //       </div>
    //       <div class=" prevent surah-body w-full text-right text-3xl mb-2">
    //           ${article.name.short}
    //       </div>
    //       <hr>
    //       <div class="prevent w-full text-right text-sm italic">
    //           Artinya - ${article.name.translation.id}
    //         </div>
    //     </div>
    //   </div>`;
    //     });
    // } catch (err) {
    //     console.log(err)
    // }

    allsurah.innerHTML = articlesHTML;
    document.querySelectorAll('.surahId').forEach(el => {
        el.addEventListener('click', (e) => {
            const id = e.target.dataset.id
            window.location.hash = `#${id}`
            getSurahById(id)
        })
    })
    document.title = 'Baca Quran'

    const searchSurah = document.getElementById('search-surah')
    searchSurah.addEventListener('keyup', filterSurah)

    function filterSurah(e) {
        const filterValue = e.target.value.toUpperCase()

        let surah = document.querySelectorAll('.surah')
        surah.forEach((el, i) => {
            let surahLatin = surah[i].querySelector('.surah-latin')
            if (surahLatin.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                surah[i].style.display = ''
            } else {
                surah[i].style.display = 'none'
            }
        })
    }
}

async function getSurahById(id) {
    let surahHTML = "";

    // try {
    //     workbox.routing.registerRoute(
    //         new RegExp('https://api.quran.sutanlab.id/surah/'),
    //         workbox.strategies.staleWhileRevalidate({
    //             cacheName: 'alquran-apps',
    //             plugins: [
    //                 new workbox.cacheableResponse.Plugin({
    //                     statuses: [200],
    //                 }),
    //                 new workbox.expiration.Plugin({
    //                     maxAgeSeconds: 60 * 60 * 24 * 365,
    //                     maxEntries: 30,
    //                 }),
    //             ],
    //         })
    //     );
    //     const response = await fetch(`${_url}${id}`)
    //     const data = await response.json()
    //     const surahId = data.data

    //     homeContent.innerHTML = `
    //   <a href="#baca-quran" class="bg-gray-300 text-indigo inline-block py-1 px-2 rounded-xl"><i class="fas fa-arrow-left mr-2"></i>Kembali</a>
    //   <div class="title p-4 dark:bg-selfmode dark:text-white shadow-2xl rounded-xl">
    //     <div class="surah-body w-full text-3xl">
    //       ${surahId.name.short}
    //     </div>
    //     <div class="w-full text-xl">
    //       (${surahId.name.transliteration.id} : ${surahId.numberOfVerses } Ayat)
    //       </div>
    //     </div>
    //     <div class="all-surah  p-4 mx-auto"></div>
    //   `
    //     document.title = `${surahId.name.transliteration.id} : ${surahId.numberOfVerses } Ayat`

    //     surahId.verses.forEach(surah => {
    //         surahHTML += `
    //         <div class="bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl mt-4 card p-3 rounded-2xl">
    //         <div>
    //           <div class="surah-header rounded-full">
    //             ${surah.number.inSurah}
    //           </div>
    //           <div class="surah-body w-full text-right text-3xl">
    //           ${surah.text.arab}
    //           </div>
    //             <div class="italic w-full text-right text-sm mt-2">
    //               "${surah.translation.id}"
    //             </div>
    //             <div class=" w-full text-left text-sm mt-4">
    //             <details class="question py-4 border-b">
    //             <summary class="flex items-center font-bold outline-none focus:outline-none">Tafsir <button class="ml-auto">
    //             <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    //           </button></summary>
    //           <div class="mt-4 leading-normal text-sm ">
    //           ${surah.tafsir.id.long}

    //           </div>
    //           </details>
    //             </div>
    //             <div class="w-full bg-gray-400 mt-2 shadow rounded-2xl btn-audio p-4 
    //             " data-url="">
    //               <audio  src="${surah.audio.primary}" id=""  type="audio/mp3" controls="controls" class=" player w-full  outline-none"></audio>
    //             </div>
    //         </div>
    //       </div>`;
    //     })

    //     document.querySelector(".all-surah").innerHTML = surahHTML

    // } catch (error) {
    //     console.log(error)
    // }
};

async function doaPage() {
    homeContent.innerHTML =
        `<div class="mt-4 p-4 relative">
      <input id="search-surah" type="search" name="search"
        class="w-full p-3 focus:outline-none bg-white text-base rounded-lg mx-auto pl-12">
        <i class="fas fa-search absolute top-8 left-8 text-xl"></i>
    </div>
    <div class="all-surah  p-4 mx-auto">
    </div>`;

    const Writerinput = document.getElementById('search-surah')
    const customNodeCreator = function(character) {
        Writerinput.placeholder = Writerinput.placeholder + character;
        return null;
    }
    const typewriter = new Typewriter(null, {
        loop: false,
        delay: 75,
        onCreateTextNode: customNodeCreator,
    });

    typewriter
        .typeString('mau baca materi apa?')
        .pauseFor(300)
        .start();

    let doaHTML = "";
    const doaContent = document.querySelector(".all-surah")
    doaContent.innerHTML = loaderTemplate()
        // try {
        //     if ("caches" in window) {
        //         caches.match('https://islamic-api-zhirrr.vercel.app/api/doaharian').then((response) => {
        //             if (response) {
        //                 response.json().then((data) => {
        //                     console.log('succes get data in cache')
        //                     data.data.forEach((article, i) => {
        //                         doaHTML += `
        //               <div class="mt-4 surah p-3 pb-6 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl card rounded-xl">
        //                 <div>
        //                   <div class="flex justify-between items-center mb-4">
        //                     <div class="surah-header rounded-full">
        //                       ${i+1}
        //                     </div>
        //                     <div class="doa surah-latin text-sm font-medium">
        //                       ${article.title}
        //                     </div>
        //                 </div>
        //                 <div class="surah-body w-full text-right text-3xl">
        //                       ${article.arabic}
        //                   </div>
        //                   <div class="surah-latin w-full text-right text-sm mt-2 italic mt-4">
        //                     "${article.translation}"
        //                   </div>
        //                 </div>
        //               </div>`;
        //                     });
        //                 })
        //             }
        //         })
        //     }

    //     const response = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian')
    //     const data = await response.json()

    //     data.data.forEach((article, i) => {
    //         doaHTML += `
    //   <div class="mt-4 surah p-3 pb-6 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl card rounded-xl">
    //     <div>
    //       <div class="flex justify-between items-center mb-4">
    //         <div class="surah-header rounded-full">
    //           ${i+1}
    //         </div>
    //         <div class="doa surah-latin text-sm font-medium">
    //           ${article.title}
    //         </div>
    //     </div>
    //     <div class="surah-body w-full text-right text-3xl">
    //           ${article.arabic}
    //       </div>
    //       <div class="surah-latin w-full text-right text-sm mt-2 italic mt-4">
    //         "${article.translation}"
    //       </div>
    //     </div>
    //   </div>`;
    //     });

    //     doaContent.innerHTML = doaHTML;
    //     document.title = 'Doa Harian'

    //     const searchSurah = document.getElementById('search-surah')
    //     searchSurah.addEventListener('keyup', filterSurah)

    //     function filterSurah(e) {
    //         const filterValue = e.target.value.toUpperCase()

    //         let surah = document.querySelectorAll('.surah')
    //         surah.forEach((el, i) => {
    //             let surahLatin = surah[i].querySelector('.doa')
    //             if (surahLatin.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
    //                 surah[i].style.display = ''
    //             } else {
    //                 surah[i].style.display = 'none'
    //             }
    //         })
    //     }
    // } catch (err) {
    //     console.log(err)
    // }
}

function bookmark() {
    homeContent.innerHTML = `<h1 class="text-center font-bold text-2xl mt-4 dark:text-white">Coming soon..</h1>`
}

async function renderAsmaul() {
    let asmaulHTML = "";

    homeContent.innerHTML = `<div id="asmaul" class="w-full grid grid-cols-2 gap-2"></div>`;
    const asmaulPage = document.getElementById('asmaul')
    asmaulPage.innerHTML = loaderTemplate()
        // try {
        //     if ("caches" in window) {
        //         caches.match('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna').then((response) => {
        //             if (response) {
        //                 response.json().then((data) => {
        //                     console.log('succes get data in cache')
        //                     data.data.forEach(article => {
        //                         asmaulHTML += `
        //               <div class="mt-4 surah p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl card rounded-xl">
        //                 <div>
        //                   <div class="flex justify-between items-center mb-4">
        //                     <div class="surah-header rounded-full">
        //                       ${article.index}
        //                     </div>
        //                     <div class="doa surah-latin text-xl font-medium">
        //                       ${article.latin}
        //                     </div>
        //                 </div>
        //                 <div class="surah-body w-full text-right text-3xl">
        //                       ${article.arabic}
        //                   </div>
        //                   <div class="surah-latin w-full text-right text-sm mt-2 italic mt-4">
        //                     "${article.translation_id}"
        //                   </div>
        //                 </div>
        //               </div>`;
        //                     });
        //                 })
        //             }
        //         })
        //     }

    //     const response = await fetch('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna')
    //     const data = await response.json()

    //     data.data.forEach(article => {
    //         asmaulHTML += `
    //   <div class="mt-4 surah p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl card rounded-xl">
    //     <div>
    //       <div class="flex justify-between items-center mb-4">
    //         <div class="surah-header rounded-full">
    //           ${article.index}
    //         </div>
    //         <div class="doa surah-latin text-xl font-medium">
    //           ${article.latin}
    //         </div>
    //     </div>
    //     <div class="surah-body w-full text-right text-3xl">
    //           ${article.arabic}
    //       </div>
    //       <div class="surah-latin w-full text-right text-sm mt-2 italic mt-4">
    //         "${article.translation_id}"
    //       </div>
    //     </div>
    //   </div>`;
    //     });

    //     asmaulPage.innerHTML = asmaulHTML;
    //     document.title = 'Asmaul Husna'
    // } catch (err) {
    //     console.log(err)
    // }
}

async function renderPageSha() {
    homeContent.innerHTML =
        `<div class=" p-4 bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-xl all-surah mx-auto">
         <h1 class = "text-center font-bold text-2xl mt-4 dark:text-white" > Coming soon.. </h1> 
         </div>`;
    document.title = 'Bacaan Shalat'
}

function aboutPage() {
    homeContent.innerHTML = `
  <div class="mt-4 surah font-sans p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-2xl">
  <h1 class = "text-center font-bold text-2xl mt-4 dark:text-white" > Coming soon.. </h1>
</div>

  `
}