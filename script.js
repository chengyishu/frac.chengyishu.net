Array.prototype.shuffle = function() {
    var array = this;
    var m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

$(function() {
    loadMathElement();
    checkOneElement();
});

function loadMathElement(random = 0) {
    $('.row').empty();
    let data = [
        ['5%', '\\(\\frac{1}{20}\\)', '\\(\\frac{1}{10} \\times \\frac{1}{2}\\)', '\\(\\frac{10\\%}{2}=5\\%\\)'],
        ['5.3%', '<span class="color">\\(\\frac{1}{19}\\)</span>', '<small>\\(6-1=5\\)</small> | <small>\\(9-6=3\\)</small>', '<b>一九五点3</b>'],
        ['5.6%', '\\(\\frac{1}{18}\\)', '\\(\\frac{1}{3} \\times \\frac{1}{6}\\)', '\\(\\frac{33.3\\%}{6}=5.55\\%\\)'],
        ['5.9%', '<span class="color">\\(\\frac{1}{17}\\)</span>', '<small>\\(7-1\\times 2\\)</small> | <small>\\(7+1\\times 2\\)</small>', '<b>一七五点9</b>'],
        ['6.3%', '\\(\\frac{1}{16}\\)', '\\(\\frac{1}{8} \\times \\frac{1}{2}\\)', '\\(\\frac{12.5\\%}{2}=6.25\\%\\)'],
        ['6.7%', '\\(\\frac{1}{15}\\)', '\\(\\frac{1}{3} \\times \\frac{1}{5}\\)', '\\(\\frac{33.3\\%}{5}=6.66\\%\\)'],
        ['7.1%', '\\(\\frac{1}{14}\\)', '\\(\\frac{1}{7} \\times \\frac{1}{2}\\)', '\\(\\frac{14.28\\%}{2}=7.14\\%\\)'],
        ['7.7%', '<span class="color">\\(\\frac{1}{13}\\)</span>', '<b>13·7，7</b>·31', '<b>七·七</b>事变'],
        ['8.3%', '\\(\\frac{1}{12}\\)', '\\(\\frac{1}{3} \\times \\frac{1}{4}\\)', '\\(\\frac{33.3\\%}{4}=8.3\\%\\)'],
        ['9.1%', '<span class="color">\\(\\frac{1}{11}\\)</span>', '<small>\\(1+1=2\\)</small> | <small>\\(11-2=09\\)</small>', '09.090909%'],
        ['10%', '\\(\\frac{1}{10}\\)', '\\(\\frac{1}{5} \\times \\frac{1}{2}\\)', '\\(\\frac{20\\%}{2}=10\\%\\)'],
        ['11.1%', '\\(\\frac{1}{9}\\)', '\\(\\frac{1}{3} \\times \\frac{1}{3}\\)', '\\(\\frac{33.3\\%}{3}=11.1\\%\\)'],
        ['12.5%', '\\(\\frac{1}{8}\\)', '\\(\\frac{1}{4} \\times \\frac{1}{2}\\)', '\\(\\frac{25\\%}{2}=12.5\\%\\)'],
        ['14.3%', '<span class="color">\\(\\frac{1}{7}\\)</span>', '<small>\\(2\\times 7=14\\)</small> | <small>\\(4\\times 7=28\\)</small>', '14、28 ~ 14.28%'],
        ['16.7%', '\\(\\frac{1}{6}\\)', '\\(\\frac{1}{3} \\times \\frac{1}{2}\\)', '\\(\\frac{33.3\\%}{2}=16.66\\%\\)'],
        ['20%', '\\(\\frac{1}{5}\\)', '\\(1\\div 5=0.20\\)', '20%'],
        ['25%', '\\(\\frac{1}{4}\\)', '\\(\\frac{1}{2} \\times \\frac{1}{2}\\)', '\\(\\frac{50\\%}{2}=25\\%\\)'],
        ['33.3%', '\\(\\frac{1}{3}\\)', '\\(1\\div 3=0.333...\\)', '33.3%'],
        ['50%', '\\(\\frac{1}{2}\\)', '\\(1\\div 2=0.50\\)', '50%'],
    ];
    if (random) {
        data.shuffle();
    }
    let template = '<div class="col"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front d-flex align-items-center justify-content-center"><h2>{p}</h2></div><div class="flip-card-back d-flex align-items-center justify-content-center"><p class="t">{t}</p><h1>{f}</h1><p class="b">{b}</p></div></div></div></div>'
    let cols = [];
    for (d of data) {
        let col = template.replace('{p}',d[0]).replace('{f}',d[1]).replace('{t}',d[2]).replace('{b}',d[3]);
        cols.push(col);
    }
    cols.push('<div class="col"><div class="flip-card per-100 d-flex align-items-center justify-content-center text-white" onclick="loadMathElement(1)">增长率，分之一<br>特殊数字特殊记<br>乘２到６找规律</div></div>');
    $('.row').append(cols);
    renderMathInElement(document.body);
    $('.col').on('click', function() {
        $(this).trigger('hover');
    });
}

function checkOneElement(lastNth = 0) {
    let nth = Math.floor(Math.random() * 19) + 1;
    while (nth == lastNth) {
        nth = Math.floor(Math.random() * 19) + 1;
    }
    $('.col.checked').removeClass('checked');
    $('.col:nth-child('+nth+')').addClass('checked');
    $('.col:nth-child('+nth+')').on('click', function(event) {
        $(this).on('click', function() {
            $(this).trigger('hover');
        });
        checkOneElement(nth);
        event.stopPropagation();
    });
}