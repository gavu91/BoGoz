        const customTitlebar = require('custom-electron-titlebar');
        var titleBar  = new customTitlebar.Titlebar({
            backgroundColor: customTitlebar.Color.fromHex('#03A9F4'),
            titleHorizontalAlignment:"left"
        });
        //  titleBar.updateMenu();
        titleBar.setHorizontalAlignment("left");
        // titleBar.updateIcon('icon/favicon.ico');