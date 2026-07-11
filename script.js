document.addEventListener('DOMContentLoaded', function () {
    // PageFlip ကို စတင် ကြေညာခြင်း
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: 350, // စာမျက်နှာ တစ်ရွက်၏ အကျယ် (Pixels)
        height: 500, // စာမျက်နှာ တစ်ရွက်၏ အမြင့် (Pixels)
        size: "fixed",
        minWidth: 300,
        maxWidth: 500,
        minHeight: 400,
        maxHeight: 700,
        showCover: true, // မျက်နှာဖုံး ပြမည်
        maxShadowOpacity: 0.5, // စာအုပ်လှန်လျှင် အရိပ်ကျသည့် အဆင့်
        mobileScrollSupport: false
    });

    // စာအုပ် ထည့်သွင်းခြင်း
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
});