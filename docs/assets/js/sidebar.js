/**
 * 侧边栏折叠功能
 */
$(function() {
    var

    $bd = $('body'),
    $win = $(window),
    $doc = $(document),

    count = 1,
    positionInfos = getPositionInfos(),
    highTriggerOffset = -35,

    sidebar = $('.sidebar'),
    sidebarBody = sidebar.find('> .sidebar-body');

    sidebarBody.on('click', '.sidebar-nav-list .item-toggle', function() {
        var itemToggle = $(this),
            item = itemToggle.closest('.item');

        toggleItem(item);
    });

    $win.on('scroll', function(e) {
        refreshSideBarHigh();
    });

    refreshSideBarHigh();

    /**
     * 根据当前的滚动位置刷新侧边栏的高亮状态
     */
    function refreshSideBarHigh() {
        var scrollTop = $win.scrollTop(),
            range = getRangeByScrollTop(scrollTop),
            rangeItem, i;

        if (!range) {
            return;
        }

        for ( i = range.length - 1; i >= 0; i-- ) {
            rangeItem = range[i];

            if ( (rangeItem.targetTop + highTriggerOffset) <= scrollTop ) {
                highItem( rangeItem.positionInfo.itemContent.closest('.item') );
                break;
            }
        }
    }

    /**
     * 高亮某个元素
     */
    function highItem(item) {
        var currentHighItem = sidebarBody.find('.item.high');

        if (currentHighItem.is(item)) {
            return;
        }

        currentHighItem.removeClass('high');
        item.addClass('high');

        // 打开高亮节点的所有父节点
        var openParents = item.parents('.item');

        openParents.each(function() {
            openItem($(this));
        });

        // 关闭当前高亮节点的所有父节点，直到与待高亮节点相同的父节点
        if (currentHighItem.length) {
            var closeParents = parentsNotHas(currentHighItem[0], item[0]);

            closeParents.each(function() {
                closeItem($(this));
            });
        }
    }

    /**
     * 查找一个 DOM 元素的祖先元素，这些祖先元素不包含所指定的过滤用 DOM 元素
     * @return 返回一个 jQuery 对象，包含所有找到的父元素
     */
    function parentsNotHas(el, filter) {
        var parents = [],
            parent = el.parentElement;

        while(parent) {
            if ( $.contains(parent, filter) ) {
                parent = undefined;
            }
            else {
                parents.push(parent);
                parent = parent.parentElement;
            }
        }

        return $(parents);
    }

    function getRangeByScrollTop(scrollTop) {
        var rangeId = Math.floor(scrollTop / positionInfos.rangeLength),
            range;

        for ( ; rangeId >= 0; rangeId--) {
            range = positionInfos.ranges[rangeId];
            if (range) { break; }
        }

        if ( !range || (range[0].targetTop + highTriggerOffset <= scrollTop) ) {
            return range;
        }
        else {
            return getRangeByScrollTop(rangeId * positionInfos.rangeLength - 1);
        }
    }

    /**
     * 获取侧边栏中每一个列表项所对应的文章区域的位置信息
     */
    function getPositionInfos() {
        var rangeLength = 1000,
            ranges = [],
            range,

            positionInfos = {
                rangeLength: rangeLength,
                ranges: ranges
            };

        $('.sidebar-body').find('.item-content').each(function() {
            var itemContent = $(this);

            // 获取 itemContent 的 id，若不存则，则设置一个
            var positionId = itemContent.data('position-id');

            if ( !positionId ) {
                positionId = count++;
                itemContent.data('position-id', positionId);
            }

            // 获取 itemCountent 对应的区域的位置信息
            var target = $(itemContent.attr('href')),
                targetTop = target.offset().top;

            var positionInfo = positionInfos[positionId] = {
                itemContent: itemContent,
                target: target,
                targetTop: targetTop
            };

            // 设置区间信息
            var rangeId = Math.floor(targetTop / rangeLength),
                range = ranges[rangeId];

            if (!range) {
                range = ranges[rangeId] = [];
            }

            range.push({
                targetTop: targetTop,
                positionInfo: positionInfo
            });
        });

        for (var i = 0; i < ranges.length; i++) {
            if ( (range = ranges[i]) ) {
                range.sort(function(a, b) {
                    return a.targetTop - b.targetTop;
                });
            }
        }

        return positionInfos;
    }

    /**
     * 切换侧边栏列表项的打开及关闭状态
     */
    function toggleItem(item, complete) {
        item.hasClass('opened') ? closeItem(item, complete) : openItem(item, complete);
    }

    /**
     * 打开侧边栏列表项
     */
    function openItem(item, complete) {
        if (isOpenItem(item)) {
            complete && complete();
        }
        else {
            item.removeClass('closed').addClass('opened');
            item.find('[rule=tree]').stop(true, true).slideDown(200, complete);
        }
    }

    /**
     * 关闭侧边栏列表项
     */
    function closeItem(item, complete) {
        if (isCloseItem(item)) {
            complete && complete();
        }
        else {
            item.removeClass('opened').addClass('closed');
            item.find('[rule=tree]').stop(true, true).slideUp(200, complete);
        }
    }

    /**
     * 判断列表项是否打开
     */
    function isOpenItem(item) {
        return item.hasClass('opened');
    }

    /**
     * 判断列表项是否关闭
     */
    function isCloseItem(item) {
        return !isOpenItem(item);
    }
});
