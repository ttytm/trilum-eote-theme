/* Generic way to styling the nested file list */
jQuery(document).ready(function($) {
    $('li').each((i, el) => $(el).children('span.fancytree-node').css('padding-left', 12 * $(el).parents('ul').length));
});
