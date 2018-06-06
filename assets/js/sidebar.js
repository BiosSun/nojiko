/**
 * 侧边栏功能
 */
$(function() {
    var

    $bd = $('body'),
    $win = $(window),
    $doc = $(document),

    count = 1,
    // positionInfos = getPositionInfos(),
    highTriggerOffset = -35,

    sidebar = $('.sidebar'),
    sidebarBody = sidebar.find('> .sidebar-body');

    sidebarBody.on('click', '.sidebar-nav-list .item-toggle', function() {
        var itemToggle = $(this),
            item = itemToggle.closest('.item');

        toggleItem(item);
    });

    // 初始化滚动条组件，并在窗口尺寸改变时，更新其状态
    sidebarBody.perfectScrollbar({
        suppressScrollX: true,
        suppressScrollY: false
    });

    $win.on('resize', function() {
        sidebarBody.perfectScrollbar('update');
    });

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
