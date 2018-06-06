hljs.initHighlightingOnLoad();

$(function() {
    var

    $bd = $('body'),
    $win = $(window),
    $doc = $(document),

    sourceKeywords = [
        'usage',
        'source'
    ],

    outputKeywords = [
        'cssoutput',
        'output'
    ];

    function getExampleDescription(el) {
        return $.trim($(el).find('> .example-description').text());
    }

    function isSourceDescription(el) {
        var desc = getExampleDescription(el);
        return hasKeyword(desc, sourceKeywords);
    }

    function isOutputDescription(el) {
        var desc = getExampleDescription(el);
        return hasKeyword(desc, outputKeywords);
    }

    function hasKeyword(str, keywords) {
        var isHasKeyword = false;

        str = str.toLowerCase().replace(/\s/g, '');

        keywords.forEach(function(keyword) {
            if (str.indexOf(keyword) === 0) {
                isHasKeyword = true;
            }
        });

        return isHasKeyword;
    }

    $('.item-example').each(function(i, el) {
        el = $(el);

        var nextEl = el.next();

        if ( isSourceDescription(el) && isOutputDescription(nextEl) ) {
            el.addClass('item-example-left');
            nextEl.addClass('item-example-right');

            $('<div class="item-example-paratactic"></div>').insertBefore(el).append(el, nextEl);
        }
    });

    /**
     * 在鼠标移入代码块时，慢慢地隐藏代码描述，让读者专心浏览代码
     */
    $('.item-example-paratactic')
        .on('mouseenter', function() {
            var description = $(this).find('.example-description');
            description.stop().fadeOut(3500);
        })
        .on('mouseleave', function() {
            var description = $(this).find('.example-description');
            description.stop().fadeIn(500);
        });
    
    $('.example-code').perfectScrollbar({
        suppressScrollX: false,
        suppressScrollY: true,
    });

    /**
     * 所有文档内容中的链接，都在新标签页中打开
     */
    $('.document a').each(function(index, link) {
        link = $(link);

        if (link.attr('href').indexOf('http') === 0) {
            link.attr('target', '_blank');
        }
    });

    /**
     * 在鼠标拖动侧边栏滑块时，改变侧边栏的宽度
     */
    (function() {
        $('.sidebar-handle').on('mousedown.sidebar', function(e) {
            var sidebarHandle = $(this),
                sidebar = $('.sidebar'),
                doc = $('.document'),

                sidebarWidth = sidebar.width(),

                maxWidth = $win.width() / 2,
                begin = e.pageX;

            sidebarHandle.addClass('on');
            disableSelect();

            $('body')
                .on('mousemove.sidebar', function(e) {
                    var end = e.pageX,
                        width = Math.min(sidebarWidth + (end - begin), maxWidth);

                    sidebar.width(width);
                    doc.css('margin-left', width);
                })
                .on('mouseup.sidebar', function() {
                    $bd.off('.sidebar');
                    enableSelect();
                    sidebarHandle.removeClass('on');
                });
        });
    })();

    function disableSelect() {
        $bd.addClass('disable-select');
    }

    function enableSelect() {
        $bd.removeClass('disable-select');
    }
});
