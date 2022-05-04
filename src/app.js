/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var MenuLayer = cc.Layer.extend({
    isHoldMouseButtonLeft: false,
    prePosition: null,
    desPosition: null,
    bgContainer: null,
    ctor: function () {
        this._super();

        var width = 720;
        var height = 1080;

        this.bgContainer = new cc.Node();
        for (var i = 0; i < 5; i++) {
            var bg = new cc.Sprite(`res/bg_menu_${i}.png`);
            bg.setAnchorPoint(0.0, 0.0);
            bg.setPosition(0, (1080 + 1080 * 0.155) * i);
            bg.setScale(0.665, 0.65);
            this.bgContainer.addChild(bg);
        }
        this.bgContainer.setPosition(-88,0);
        this.addChild(this.bgContainer);

        if (cc.sys.capabilities.hasOwnProperty("mouse")) {
            cc.eventManager.addListener(
                {
                    event: cc.EventListener.MOUSE,
                    onMouseDown: function(event){
                        if(event.getButton() === cc.EventMouse.BUTTON_LEFT){
                            this.isHoldMouseButtonLeft = true;
                            this.prePosition = event.getLocationY();
                            return;
                        }
                    }.bind(this),
                    onMouseMove: function(event){
                        if(!this.isHoldMouseButtonLeft) return;
                        offset = event.getLocationY() - this.prePosition;
                        this.prePosition = event.getLocationY();
                        if(this.desPosition + offset*2 > 0){
                            var action = new cc.EaseSineOut(new cc.MoveBy(0.1, cc.p(0, 0-this.desPosition)))
                            this.bgContainer.runAction(action);
                            this.desPosition = 0;
                            return;
                        }
                        if(this.desPosition + offset*2 < -5*(1080*1.155)+1080-130){
                            var action = new cc.EaseSineOut(new cc.MoveBy(0.1, cc.p(0, (-5*(1080*1.155)+1080-130)-this.desPosition)))
                            this.bgContainer.runAction(action);
                            this.desPosition = -5*(1080*1.155)+1080-130;
                            return;
                        }
                        this.desPosition+=offset*2;
                        var time = Math.abs(offset/75);
                        var action = new cc.EaseSineOut(new cc.MoveBy(time, cc.p(0, offset*2)))
                        this.bgContainer.runAction(action);
                        // this.bgContainer.setPositionY(this.bgContainer.getPositionY() + offset);
                    }.bind(this),
                    onMouseUp: function(event){
                        if(event.getButton() === cc.EventMouse.BUTTON_LEFT){
                            this.isHoldMouseButtonLeft = false;
                        }
                    }.bind(this)
                },
                this.bgContainer
            );
        }

        var position = [
            {x:280,y:220},
            {x:365,y:310},
            {x:500,y:330},
            {x:620,y:358.875},
            {x:693.25,y:448.875},
            {x:654.8004223864837,y:539.4297782470961},
            {x:570.4076029567054,y:585.0475184794086},
            {x:442.67793030623017,y:606.7159450897572},
            {x:297.8416050686378,y:645.4910242872228},
            {x:210.0274551214361,y:736.7265047518479},
            {x:273.8922914466737,y:832.5237592397043},
            {x:366.26821541710666,y:884.9841605068638},
            {x:478.0316789862724,y:914.6356916578669},
            {x:563.875,y:936},
            {x:657.25,y:993.375},
            {x:686.5,y:1091.25},
            {x:605.5,y:1179},
            {x:511,y:1213.875},
            {x:410.875,y:1229.625},
            {x:264.625,y:1278},
            {x:225.25,y:1378.125},
            {x:311.875,y:1446.75},
            {x:432.25,y:1465.875},
            {x:565,y:1477.125},
            {x:664,y:1500.75},
            {x:739.375,y:1594.125},
            {x:705.625,y:1681.875},
            {x:587.5,y:1733.625},   
            {x:458.125,y:1751.625},
            {x:338.875,y:1766.25},
            {x:235.375,y:1845},
            {x:286,y:1955.25},
            {x:421,y:2002.5},
            {x:588.625,y:2055.375},
            {x:617.875,y:2165.625},
            {x:503.125,y:2211.75},
            {x:390.625,y:2235.375},
            {x:289.375,y:2259},
            {x:220.75,y:2378.25},
            {x:305.125,y:2459},
            {x:433.375,y:2490.5},
            {x:572.875,y:2515.25},
            {x:696.625,y:2573.75},
            {x:658.375,y:2691.875},
            {x:540.25,y:2735.75},
            {x:383.875,y:2767.25},
            {x:268,y:2828},
            {x:235.375,y:2952.875},
            {x:315.25,y:3035},
            {x:455.875,y:3090},
            {x:587.5,y:3123.75},
            {x:705.625,y:3191.25},
            {x:688.75,y:3316.125},
            {x:541.375,y:3348.75},
            {x:370.375,y:3353.25},
            {x:250,y:3390.375},
            {x:194.875,y:3487.125},
            {x:302.875,y:3601.875},
            {x:418.75,y:3626.625},
            {x:567.25,y:3644.625},
            {x:689.875,y:3694.125},
            {x:694.375,y:3804.375},
            {x:586.375,y:3861.75},
            {x:453.625,y:3893.25},
            {x:336.625,y:3924.75},
            {x:265.75,y:4000.125},
            {x:259,y:4018.125},
            {x:347.875,y:4095.625},
            {x:482.875,y:4126},
            {x:610,y:4158.625},
            {x:692.125,y:4239.625},
            {x:620.125,y:4355.5},
            {x:509.875,y:4397.125},
            {x:381.625,y:4420.75},
            {x:256.75,y:4466.875},
            {x:226.375,y:4563.625},
            {x:367,y:4639},
            {x:496.375,y:4666},
            {x:608.875,y:4708.75},
            {x:685.375,y:4781.875},
            {x:682,y:4875.25},
            {x:616.75,y:4951.75},
            {x:506.5,y:5001.25},
            {x:372.625,y:5023.75},
            {x:229.75,y:5127.125},
            {x:281.5,y:5232.875},
            {x:424.375,y:5261},
            {x:581.875,y:5279},
            {x:715.75,y:5351},
            {x:691,y:5491.625},
            {x:561.625,y:5551.25},
            {x:401.875,y:5563.625},
            {x:261.25,y:5609.75},
            {x:269.125,y:5743.625},
            {x:410.875,y:5796.5},
            {x:562.75,y:5793.125},
            {x:682,y:5972},
            {x:586.375,y:6024.875},
            {x:471.625,y:6054.125},
            {x:353.5,y:6077.75},
        ]

        for(var i = 0; i < 100; i++){
            var stage_locked = new cc.Sprite("res/atlas_menu/stage_locked.png");
            stage_locked.setPosition(position[i].x, position[i].y)
            stage_locked.setScale(0.65,0.65);
            this.bgContainer.addChild(stage_locked);
        }

        cc.log(res.data.levels);

        return true;
    },
});

var MenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    },
});
