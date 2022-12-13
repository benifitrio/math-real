function limitTakHingga() {
    homeContent.innerHTML = `
<div style="margin-bottom:6rem;"  class="mt-4 surah font-sans p-3 d-block bg-bglightmode text-textlightmode dark:bg-selfmode dark:text-white shadow-2xl rounded-2xl">
<b>A. Definisi </b>
<p style="padding-left: 10px;">
    Limit ketika x $\to$ $\infty$ misalkan f terdefinisi pada [$\alpha$, $\infty$) untuk beberapa bilangan $\alpha$. Dikatakan $\lim_{x\to \infty}$ f(x) = L jika untuk setiap s > 0 ada bilangan M sedemikian sehingga jika x > maka M |ƒ(x) − L| $\lt$ s.
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Limit ketika x → −∞, misalkan f terdefinisi pada (−∞, $\alpha$] untuk beberapa bilangan $\alpha$. Dikatakan $\lim_{x\to -\infty}$ ƒ(x) = L jika untuk setiap s > 0 ada bilangan M sedemikian sehingga jika x $\lt$ M maka |ƒ(x) − L| $\lt$ s.
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Limit suatu barisan misalkan terdefinisi untuk semua bilangan asli lebih dari atau sama dengan beberapa bilangan $s_n$. Dikatakan bahwa $\lim_{n\to \infty}$ $s_n$ = L jika untuk setiap s > 0 ada bilangan asli M sedemikian sehingga jika n > M maka |$s_n$
    − L| $\lt$ s.
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Dikatakan bahwa $\lim_{n\to \alpha^+}$ ƒ(x) = ∞ untuk setiap bilangan positif M ada $\delta$ > 0 sedemikian sehingga jika 0 $\lt$ x − $\alpha$ $\lt$ $\delta$ maka ƒ(x) > M. Misalkan diberikan fungsi ƒ(x) = $\frac{1}{x-1}$ maka nilai fungsi f(x) menuju
    tak hingga (∞) untuk x mendekati 1 dari kanan, sedangkan menuju minus tak hingga (−∞) untuk x mendekati 1 dari kiri. Pengertian tersebut dapat dinotasikan dengan limit sebagai berikut:
    <span class="d-block text-center"> 
     $\lim_{n\to 1^+} ƒ(x)$ = ∞ dan $\lim_{n\to 1^-} ƒ(x)$ = -∞
    </span>
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Bila f(x) = $\frac{1}{(x-1)^2}$ maka didapatkan $\lim_{n\to 1^+} ƒ(x)$ = ∞ dan $\lim_{n\to 1^-} ƒ(x)$ = -∞. Bentuk limit tersebut dinamakan limit tak hingga, yaitu nilai fungs f(x) untuk x mendekati 1 sama dengan tak hingga (∞).
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Sedangkan bentuk limit di titik mendekati tak hingga diilustrasikan sebagai berikut misal diberikan fungsi ƒ(x) = $\frac{1}{x}$ maka nilai fungsi akan mendekati nol bila x menuju tak hingga atau minus tak hingga, dinotasikan:
    <span class="d-block text-center"> 
$\lim_{n\to ∞} ƒ(x)$ = 0 dan $\lim_{n\to -∞} ƒ(x)$ = 0.
</span>
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Secara umum, limit fungsi dari ƒ(x) = $\frac{1}{x^n}$, n $\in$ $B^+$ untuk x mendekati tak hingga atau minus tak hingga sama dengan nol, dituliskan:
    <span class="d-block text-center"> 
$\lim_{n\to ∞} ƒ(x)$ = 0 dan $\lim_{n\to -∞} ƒ(x)$ = 0.
</span>
</p>
<p style="text-indent: 20px; padding-left: 10px;">
    Bila f(x) merupakan fungsi rasional, misal ƒ(x) = $\frac{p(x)}{q(x)}$ dengan p(x) dan q(x) merupakan polinom maka untuk menyelesaikan limit di tak hingga dilakukan dengan membagi pembilang p(x) dengan penyebut q(x) dengan x pangkat tertinggi yang terjadi.
</p>
<p>
    <b>B. CONTOH SOAL</b>
    <ol>
        <li>
            <p>
                Tunjukkan bahwa jika k adalah bilangan bulat positif, maka $\lim_{n\to ∞} \frac{1}{x^k}$ = 0. <br>
                <b>Bukti:</b> <br> Diberikan s > 0, akan ditemukan bilangan $M$ sedemikian sehingga jika x > $M$ maka $|\frac{1}{x^k} - 0| \lt s$. <br> Perhatikan bahwa: <br> $|\frac{1}{x^k} - 0| \lt s$ <br> $|\frac{1}{x^k}| \lt s$
                <br> Misalkan $M$ > 0, akibatnya $x$ > 0 sehingga: <br> $\frac{1}{x^k} \lt s$ <br> $x^k \gt \frac{1}{s}$ <br> $x \gt \sqrt[k]{\frac{1}{s}}$ <br> sehingga akan dipilih $M$ = $\sqrt[k]{\frac{1}{s}}$ sedemikian sehingga
                jika x > M <br> maka:
                <br> $\left| \frac{1}{x^{k}} -0 \right| = \frac{1}{x^{k}} \lt \frac{1}{M^{k}} = s$ <br> Sehingga terbukti bahwa $\lim_{x \to \infty} \frac{1}{x^{k}} = 0$
            </p>
        </li>
        <li>
            <p>
                Tunjukkan bahwa jika k adalah bilangan bulat positif, maka $\lim_{n\to ∞} \frac{1}{x^k}$ = 0. <br>
                <b>Bukti:</b> <br> Diberikan s > 0, akan ditemukan bilangan $M$ sedemikian sehingga jika x $\lt$ $M$ maka $|\frac{1}{x^k} - 0| \lt s$. <br> Perhatikan bahwa: <br> $|\frac{1}{x^k} - 0| \lt s$ <br> $|\frac{1}{x^k}| \lt
                s$
                <br> Misalkan $M \lt 0$, akibatnya $x \lt 0$ sehingga: <br> $\frac{1}{x^k} \lt s$ <br> $x^k \gt \frac{1}{s}$ <br> $x \gt \sqrt[k]{\frac{1}{s}}$ <br> sehingga akan dipilih $M$ = $\sqrt[k]{\frac{1}{s}}$ sedemikian sehingga
                jika $x \lt M$
                <br> maka:
                <br> $\left| \frac{1}{x^{k}} -0 \right| = \frac{1}{x^{k}} \lt \frac{1}{M^{k}} = s$ <br> Sehingga terbukti bahwa $\lim_{x \to \infty} \frac{1}{x^{k}} = 0$
            </p>
        </li>
        <li>
            <p>
                Tentukan bahwa $\lim_{x\to 3^+} \frac{1}{(x-3)^2}$ <br>
                <u>Jawab:</u> <br> $x\to 3^{+}$ penyebutnya tetap positif tetapi mendekati 0, sedangkan pembilangnya tetap 1. Sehingga $\frac{1}{(x-3)^2}$ dapat dibuat besar dengan membatasi x untuk dekat tetapi dikanan 3 sehingga:
                <span class="d-block text-center"> 
                 $\lim_{x\to 3^+} \frac{1}{(x-3)^2}= \infty$
                </span>
            </p>
        </li>
        <li>
            <p>
                Tentukan bahwa $\lim_{x\to 3^-} \frac{1}{(x-3)^2}$ <br>
                <u>Jawab:</u> <br> $x\to 3^{-}$ penyebutnya tetap positif tetapi mendekati 0, sedangkan pembilangnya tetap 1. Sehingga $\frac{1}{(x-3)^2}$ dapat dibuat besar dengan membatasi x untuk dekat tetapi dikiri 3 sehingga:
                <span class="d-block text-center">$\lim_{x\to 3^-} \frac{1}{(x-3)^2}= \infty$
            </span>
            </p>
        </li>
        <li>
            <p>
                Tentukan $\lim_{x\to 3^+} \frac{3+x}{(3-x)}$ <br>
                <u>Jawab:</u> <br> Nilai dari pembilang untuk x mendekati 3 dari arah kanan adalah mendekati 6, sedangkan nilai penyebut akan mendekati negatif bilangan yang sangat kecil. Bila 6 dibagi oleh bilangan negatif kecil sekali
                akan menghasilkan bilangan sangat kecil, maka :
                <span class="d-block text-center"> 
                 $\lim_{x\to 3^+} \frac{3+x}{(3-x)} = -\infty$
          </span>
            </p>
        </li>
        <li>
            <p>
                Tentukan $\lim_{x\to \infty} \frac{2x^3-5}{(4x^2+x+1)}$ <br>
                <u>Jawab:</u> <br> Nilai pangkat tertinggi dari pembilang adalah 3, sedangkan nilai pangkat tertinggi dari penyebut adalah 2 (m > n). Jadi, nilai limit yang benar adalah ∞.
            </p>
        </li>
        <!-- <li>
            <p>
                Tentukan $\lim_{x\to \infty} \frac{x^3-2x^2+5}{(2x^3+4x+10)}$ <br>
                <u>Jawab:</u> <br> Pembilang penyebut dibagi dengan $x^3$ (pengkat tertinggi 3). <br> $\lim_{x\to \infty} \frac{x^3-2x^2+5}{(2x^3+4x+10)} = \frac{1-\frac{2}{x}+\frac{6}{x^3}}{2+\frac{4}{x^2}+\frac{10}{x^3}}$ <br> perlu
                diingat jika nilai x = ∞ langsung disubstitusi ke ƒ(x) mendapatkan hasil $\infty \to \infty = \frac{x}{0}$ atau ($0 x \infty$) maka $\lim_{x\to \infty} f(x)$ disebut bentuk tak tentu dari limit fungsi <br> $= \frac{1-\frac{2}{\infty}+\frac{6}{\infty^3}}{2+\frac{4}{\infty^2}+\frac{10}{\infty^3}}
                $ <br> $= \frac{1 - 0 + 0}{2 + 0 + 0}$
            </p>
        </li> -->
        <li>
            <p>
                Tentukan $\lim_{x\to \infty} \sqrt{4x^2-2x+1} - (2x - 2)$ <br>
                <u>Jawab:</u> <br> <img src="../images/rumus22.png" alt="" class="w-100">
            </p>
        </li>
        <li>
            <p>
                Tentukan <br> $\lim_{x\to \infty} \frac{3x^4-2x^3-5x+4}{2x^4-4x^2+9}$ <br>
                <u>Jawab:</u>
                <br> Limit x menuju ∞ dengan pangkat tertinggi yang sama . m = n. apabila pangkat terbesar ada diatas dan dibawah, maka nilai limitnya adalah hasil pembagian koefisien variable pangkat tertinggi tersebut.
                <br> $\lim_{x\to \infty} \frac{3x^4-2x^3-5x+4}{2x^4-4x^2+9} = \frac{3}{2}$
            </p>
        </li>
        <li>
            <p>
                Tentukan <br> $\lim_{x\to \infty} \frac{7x^4+2x^3-5x+4}{2x^4-5x^2+6}$ <br>
                <u>Jawab:</u> <br> Limit x menuju ∞ dengan pangkat tertinggi dari pembilang lebih rendah dari penyebutnya, m $\lt$n. maka satu yang harus segera diperhatikan pada soal adalah pangkat terbesar ada di bawah berarti nol.
                Sehingga nilai limitnya adalah 0 (nol). <br> $\lim_{x\to \infty} \frac{7x^4+2x^3-5x+4}{2x^4-5x^2+6} = 0$.
            </p>
        </li>
        <li>
            <p>
                Tentukan $\lim_{x\to \infty} \frac{2x^3+3x^2+7}{x^2+3x+4}$ <br>
                <u>Jawab:</u> <br> Perhatikan bahwa bagian pembilang dan penyebut fungsinya merupakan fungsi polinom. Karena pembilang > penyebut , maka nilai limitnya adalah ∞.
            </p>
        </li>
        <li>
            <p>
                Tentukan $\lim_{x\to \infty} \frac{6x^6-5x^5-4}{3x^6-7}$ <br>
                <u>Jawab:</u> <br> Limit x menuju ∞ dengan pangkat tertinggi yang sama . m = n. apabila pangkat terbesar ada diatas dan dibawah, maka nilai limitnya adalah hasil pembagian koefisien variable pangkat tertinggi tersebut.
                <br> $\lim_{x\to \infty} \frac{6x^6-5x^5-4}{3x^6-7} = 2$
            </p>
        </li>
        <li>Tentukan $\lim_{x\to \infty} \frac{9x^4+6x^3+3}{8x^5-4x^5+2}$ <br>
            <u>Jawab:</u> <br> Limit x menuju ∞ dengan pangkat tertinggi dari pembilang lebih rendah dari penyebutnya, m $\lt$ n. maka satu yang harus segera diperhatikan pada soal adalah pangkat terbesar ada di bawah berarti nol.
            Sehingga nilai limitnya adalah 0 (nol). <br> $\lim_{x\to \infty} \frac{9x^4+6x^3+3}{8x^5-4x^5+2} = 0$
        </li>
        <li>Tentukan $\lim_{x\to \infty} \frac{x-x^3}{x^2-4}$ <br>
            <u>Jawab:</u> <br> Nilai dari pembilang untuk x adalah mendekati -∞, sedangkan nilai penyebut akan mendekati positif bilangan ∞. Bila negatif ∞ dibagi oleh bilangan positif ∞ akan menghasilkan bilangan negatif ∞ maka:
            <br> $\lim_{x\to \infty} \frac{x-x^3}{x^2-4} = -∞$
        </li>
        <li>Tentukan $\lim_{x\to \infty} \frac{5x^2-9}{7x+3}$ <br>
            <u>Jawab:</u> <br> Nilai pangkat tertinggi dari pembilang adalah 2, sedangkan nilai pangkat tertinggi dari penyebut adalah 1 (m > n). Jadi, nilai limitnya adalah ∞.
        </li>
    </ol>
</p>
<p>
    <b>KESIMPULAN
    </b>
    <p style="text-indent: 20px;">
        Dikatakan $\lim_{x\to \infty} f(x) = L$ jika untuk setiap s > 0 ada bilangan M sedemikian sehingga jika x > M maka |f(x) - L| $\lt s$
    </p>
    <p style="text-indent: 20px;">
        Dikatakan $\lim_{x\to \infty} f(x) = L$ jika untuk setiap s > 0 ada bilangan M sedemikian sehingga jika x $\lt s$ M maka |f(x) - L| $\lt s$
    </p>
    <p style="text-indent: 20px;">
        Bila $f(x) = \frac{1}{(x-1)^2}$ maka didapatkan $\lim_{x\to 1^+} f(x) = \infty$ dan $\lim_{x\to 1^-} f(x) = \infty$. Bentuk limit tersebut dinamakan limit tak hingga, yaitu nilai fungs f(x) untuk x mendekati 1 sama dengan tak hingga (∞).
    </p>
    <p style="text-indent: 20px;">
        Sedangkan bentuk limit di titik mendekati tak hingga diilustrasikan sebagai berikut misal diberikan fungsi ƒ(x) = $\frac{1}{x}$ maka nilai fungsi akan mendekati nol bila x menuju tak hingga atau minus tak hingga, dinotasikan:
        <span class="d-block text-center"> 
            $\lim_{x\to \infty} f(x) = 0$ dan $\lim_{x\to -\infty} f(x) = 0$ 
     </span>
    </p>
    <p style="text-indent: 20px;">
        Bila f(x) merupakan fungsi rasional, misal f(x) = $\frac{p(x)}{q(x)}$ dengan p(x) dan q(x) merupakan polinom maka untuk menyelesaikan limit di tak hingga dilakukan dengan membagi pembilang p(x) dengan penyebut q(x) dengan x pangkat tertinggi yang terjadi.
    </p>
</p>
</div>

`
}