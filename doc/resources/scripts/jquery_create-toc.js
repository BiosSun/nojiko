/*!
 * jQuery.CreateTOC 是一款用于依据文章标题信息创建内容目录列表的 jQuery 插件。
 */
(function() {
    var defTitleSelector = 'h1, h2, h3, h4, h5, h6';

    $.fn.createTOC = function($titleSelector) {
        $titleSelector = $titleSelector || defTitleSelector;

        var $content = this.eq(0),
            $titles = $content.find($titleSelector),

            $documentDirectory = null,
            $prevLi = null,
            prevLiTitleLevel = undefined,

            $t, $tli, $tul, tl, i, l, j, jl;

        if ($titles.length) {
            $documentDirectory = $('<ul></ul>');
            $prevLi = createLi($titles.eq(0)).appendTo($documentDirectory);
            prevLiTitleLevel = getTitleLevel($titles.eq(0));

            for (i = 1, l = $titles.length; i < l; i++) {
                $t = $titles.eq(i);
                tl = getTitleLevel($t);

                $tli = createLi($t);

                if (tl == prevLiTitleLevel) {
                    $tli.insertAfter($prevLi);
                }
                else if (tl > prevLiTitleLevel) {
                    var $uls = $();
                    for (j = 0, jl = tl - prevLiTitleLevel; j < jl; j++) {
                        $uls = $uls.add($('<ul></ul>'));
                        if (j != jl - 1) { $uls = $uls.add('<li></li>'); }
                    }
                    $uls = $uls.add($tli);
                    $prevLi.append(nestNode($uls));
                }
                else {
                    for (j = 0, jl =  prevLiTitleLevel - tl; j < jl; j++) {
                        $prevLi = $prevLi.parent().parent();
                    }
                    $tli.insertAfter($prevLi);
                }

                prevLiTitleLevel = tl;
                $prevLi = $tli;
            }

            $titles.each(function() {

            });
        }


        return $documentDirectory;
    };

    var titleLevelMap = {
        'h1' : 1,
        'h2' : 2,
        'h3' : 3,
        'h4' : 4,
        'h5' : 5,
        'h6' : 6
    },
        titleIdCount = 0;

    function createLi($title) {
        var titleId = $title.attr('id'),
            $li = $('<li></li>'),
            $content = $('<a></a>').append($title.html()).appendTo($li),
            id;

        if (!titleId) {
            titleId = 'document-title-' + (titleIdCount++) + '-byBiosSun';
            $title.attr('id', titleId);
        }

        $content.attr('href', '#' + titleId);

        return $li;
    }

    function getTitleLevel($title) {
        var l = titleLevelMap[$title.prop('nodeName').toLowerCase()];
        console.log('getTitleLevel: ' + l);
        return l;
    }

    function nestNode($nodes) {
        for (var i = 1, l = $nodes.length; i < l; i++) {
            $nodes.eq(i - 1).append($nodes.eq(i));
        }

        return $nodes.eq(0);
    }
})();
