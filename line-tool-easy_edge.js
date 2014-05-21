/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['adobe-clean, sans-serif']='<script type=\"text/javascript\" src=\"//use.typekit.net/ifk8acb.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'start-screen',
                display: 'block',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'success-animation',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'instructions',
                display: 'none',
                type: 'rect',
                rect: ['23', '25','auto','auto','auto', 'auto']
            },
            {
                id: 'success-state',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'fail-state',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'success-state',
                symbolName: 'success-state',
                autoPlay: {

                }
            },
            {
                id: 'start-screen',
                symbolName: 'start-screen',
                autoPlay: {

                }
            },
            {
                id: 'instructions',
                symbolName: 'instructions',
                autoPlay: {

                }
            },
            {
                id: 'fail-state',
                symbolName: 'fail-state',
                autoPlay: {

                }
            },
            {
                id: 'success-animation',
                symbolName: 'success-animation',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_level_x_goalCopy2}": [
                ["style", "letter-spacing", '2px'],
                ["style", "font-size", '87.5%'],
                ["color", "color", 'rgba(255,255,255,0.6118)'],
                ["style", "opacity", '0'],
                ["style", "left", '25px'],
                ["style", "width", '189px'],
                ["style", "top", '25px'],
                ["style", "height", '17px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '600']
            ],
            "${_fail-state}": [
                ["style", "display", 'none']
            ],
            "${_ok_textCopy}": [
                ["style", "letter-spacing", '2px'],
                ["style", "font-weight", '800'],
                ["color", "color", 'rgba(34,34,34,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '6px'],
                ["style", "font-size", '87.5%'],
                ["style", "top", '10px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '13px'],
                ["style", "font-family", '"Adobe Clean", sans-serif'],
                ["style", "font-style", 'normal'],
                ["style", "width", '54px']
            ],
            "${_start-screen}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '24px'],
                ["style", "display", 'block'],
                ["style", "right", '31px'],
                ["style", "left", 'auto']
            ],
            "${_instructions}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(160,78,135,1.00)'],
                ["style", "width", '615px'],
                ["style", "height", '360px'],
                ["style", "overflow", 'hidden']
            ],
            "${_level_x_goalCopy}": [
                ["style", "letter-spacing", '2px'],
                ["style", "font-size", '87.5%'],
                ["color", "color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '84px'],
                ["style", "width", '189px'],
                ["style", "top", '25px'],
                ["style", "height", '17px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'source-sans-pro, sans-serif'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '600']
            ],
            "${_success-state}": [
                ["style", "display", 'none']
            ],
            "${_success-animation}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20100,
            autoPlay: true,
            labels: {
                "goal-instructions": 1000,
                "action-instructions": 4600,
                "play-game": 10500,
                "success": 11700,
                "success-state": 12700,
                "fail-state": 16300
            },
            timeline: [
                { id: "eid2149", tween: [ "style", "${_instructions}", "opacity", '0', { fromValue: '1'}], position: 10300, duration: 200 },
                { id: "eid1861", tween: [ "style", "${_success-state}", "display", 'block', { fromValue: 'none'}], position: 12700, duration: 0 },
                { id: "eid1863", tween: [ "style", "${_success-state}", "display", 'none', { fromValue: 'block'}], position: 16300, duration: 0 },
                { id: "eid2745", tween: [ "style", "${_instructions}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid2462", tween: [ "style", "${_instructions}", "display", 'none', { fromValue: 'block'}], position: 10699, duration: 0 },
                { id: "eid2788", tween: [ "style", "${_start-screen}", "display", 'none', { fromValue: 'block'}], position: 1200, duration: 0 },
                { id: "eid2173", tween: [ "style", "${_success-animation}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
                { id: "eid1865", tween: [ "style", "${_fail-state}", "display", 'block', { fromValue: 'none'}], position: 16300, duration: 0 },
                { id: "eid2175", tween: [ "style", "${_success-animation}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 200 },
                { id: "eid1902", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fail-state}', [0] ], ""], position: 0 },
                { id: "eid2789", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_start-screen}', [0] ], ""], position: 0 },
                { id: "eid2746", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_instructions}', [0] ], ""], position: 0 },
                { id: "eid1866", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_success-animation}', [0] ], ""], position: 0 },
                { id: "eid1901", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_success-state}', [0] ], ""], position: 0 },
                { id: "eid2582", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_instructions}', ['start'] ], ""], position: 1000 },
                { id: "eid2790", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_start-screen}', [0] ], ""], position: 1000 },
                { id: "eid2863", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_instructions}', [] ], ""], position: 3501 },
                { id: "eid1984", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_instructions}', ['action-instructions'] ], ""], position: 4600 },
                { id: "eid1973", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_instructions}', [] ], ""], position: 10300 },
                { id: "eid1867", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_success-animation}', [0] ], ""], position: 10500 },
                { id: "eid2221", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_success-animation}', [] ], ""], position: 10699 },
                { id: "eid2663", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_success-animation}', ['play-game'] ], ""], position: 11700 },
                { id: "eid1868", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_success-state}', [0] ], ""], position: 12700 },
                { id: "eid2476", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_success-state}', [] ], ""], position: 16200 },
                { id: "eid1940", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_success-animation}', ['play-game'] ], ""], position: 16300 },
                { id: "eid1903", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_fail-state}', [0] ], ""], position: 16300 },
                { id: "eid2497", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fail-state}', [] ], ""], position: 20070.890958319 }            ]
        }
    }
},
"next-button": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    userClass: 'button',
                    type: 'group',
                    id: 'next_button_group',
                    opacity: 1,
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '79', '37', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '74px', '32px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,1.00)'],
                        id: 'next_button_white',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                    },
                    {
                        font: ['adobe-clean, sans-serif', [87.5, '%'], 'rgba(34,34,34,1.00)', '800', 'none', 'italic'],
                        type: 'text',
                        id: 'next_text',
                        text: 'NEXT',
                        align: 'center',
                        rect: ['6px', '7px', '54px', '13px', 'auto', 'auto']
                    },
                    {
                        id: 'triangle_icon',
                        type: 'image',
                        rect: ['58px', '11px', '8px', '11px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/triangle_b2.svg', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_next_text}": [
                ["style", "letter-spacing", '2px'],
                ["style", "font-size", '87.5%'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(34,34,34,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '6px'],
                ["style", "width", '54px'],
                ["style", "top", '7px'],
                ["style", "height", '13px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '800']
            ],
            "${_next_button_white}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '74px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '32px'],
                ["subproperty", "boxShadow.offsetV", '4px'],
                ["subproperty", "boxShadow.offsetH", '4px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.16)']
            ],
            "${_next_button_group}": [
                ["style", "top", '0px'],
                ["style", "height", '37px'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '79px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '79px']
            ],
            "${_triangle_icon}": [
                ["style", "top", '11px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '11px'],
                ["style", "opacity", '1'],
                ["style", "left", '58px'],
                ["style", "width", '8px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"ok-button": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    userClass: 'button',
                    type: 'group',
                    id: 'ok_button_group',
                    opacity: 1,
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '79', '37', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'ok_button_shadowCopy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['5px', '5px', '74px', '32px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0.16)']
                    },
                    {
                        rect: ['0px', '0px', '74px', '32px', 'auto', 'auto'],
                        fill: ['rgba(255,255,255,1.00)'],
                        id: 'ok_button_whiteCopy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                    },
                    {
                        id: 'triangle_icon_ok',
                        type: 'image',
                        rect: ['58px', '11px', '8px', '11px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/triangle_b2.svg', '0px', '0px']
                    },
                    {
                        font: ['adobe-clean, sans-serif', [87.5, '%'], 'rgba(34,34,34,1.00)', '800', 'none', 'italic'],
                        type: 'text',
                        id: 'ok_text',
                        text: 'OK!',
                        align: 'center',
                        rect: ['6px', '7px', '54px', '13px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ok_button_shadowCopy}": [
                ["color", "background-color", 'rgba(0,0,0,0.1569)'],
                ["style", "top", '5px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '32px'],
                ["style", "opacity", '1'],
                ["style", "left", '5px'],
                ["style", "width", '74px']
            ],
            "${_ok_text}": [
                ["style", "letter-spacing", '2px'],
                ["style", "font-weight", '800'],
                ["transform", "scaleX", '1'],
                ["color", "color", 'rgba(34,34,34,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '6px'],
                ["style", "font-size", '87.5%'],
                ["style", "top", '7px'],
                ["style", "font-style", 'normal'],
                ["style", "text-align", 'center'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '13px'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["transform", "scaleY", '1'],
                ["style", "width", '54px']
            ],
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '79px']
            ],
            "${_ok_button_whiteCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '74px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '32px'],
                ["subproperty", "boxShadow.offsetV", '4px'],
                ["subproperty", "boxShadow.offsetH", '4px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.16)']
            ],
            "${_triangle_icon_ok}": [
                ["style", "top", '11px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '11px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '58px'],
                ["style", "width", '8px']
            ],
            "${_ok_button_group}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '79px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"draw-line-goal": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'drawn-line-goal',
                    type: 'image',
                    rect: ['24px', '118px', '359px', '10px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'lt-instructions-easy-assets/drawn-line.svg', '0px', '0px']
                },
                {
                    id: 'targetsCopy',
                    type: 'image',
                    rect: ['-1px', '105px', '397px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'lt-instructions-easy-assets/targets.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_targetsCopy}": [
                ["style", "top", '51px'],
                ["transform", "rotateZ", '-15deg'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_drawn-line-goal}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '-15deg'],
                ["transform", "scaleX", '0'],
                ["style", "left", '24px'],
                ["style", "top", '118px']
            ],
            "${symbolSelector}": [
                ["style", "height", '149px'],
                ["style", "width", '396px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid1819", tween: [ "style", "${_targetsCopy}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid2951", tween: [ "style", "${_targetsCopy}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid2952", tween: [ "style", "${_targetsCopy}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid2953", tween: [ "style", "${_targetsCopy}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid2954", tween: [ "style", "${_targetsCopy}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid1744", tween: [ "transform", "${_drawn-line-goal}", "scaleY", '1', { fromValue: '0'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid1743", tween: [ "transform", "${_drawn-line-goal}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 300, easing: "easeOutQuad" },
                { id: "eid1823", tween: [ "transform", "${_drawn-line-goal}", "rotateZ", '-15deg', { fromValue: '-15deg'}], position: 2500, duration: 0 },
                { id: "eid1818", tween: [ "transform", "${_targetsCopy}", "rotateZ", '-15deg', { fromValue: '-15deg'}], position: 2500, duration: 0 },
                { id: "eid1742", tween: [ "style", "${_targetsCopy}", "opacity", '0.50454126829268', { fromValue: '0'}], position: 100, duration: 200 },
                { id: "eid1822", tween: [ "style", "${_targetsCopy}", "top", '51px', { fromValue: '51px'}], position: 2500, duration: 0 }            ]
        }
    }
},
"goal-text": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['adobe-clean, sans-serif', [125, '%'], 'rgba(255,255,255,1.00)', '500', 'none', 'italic'],
                    id: 'instruction',
                    text: 'Draw a line between the targets.',
                    type: 'text',
                    rect: ['-59px', '25px', '327px', '70px', 'auto', 'auto']
                },
                {
                    font: ['adobe-clean, sans-serif', [87.5, '%'], 'rgba(255,255,255,0.61)', '500', 'none', 'italic'],
                    id: 'level_x_goal',
                    text: 'LEVEL 1 GOAL:',
                    type: 'text',
                    rect: ['-59px', '0px', '189px', '17px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_instruction}": [
                ["style", "line-height", '127%'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-weight", '500'],
                ["color", "color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '382px'],
                ["style", "top", '25px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '70px'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "font-style", 'normal'],
                ["style", "font-size", '125%']
            ],
            "${_level_x_goal}": [
                ["style", "letter-spacing", '2px'],
                ["style", "font-size", '87.5%'],
                ["color", "color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '189px'],
                ["style", "top", '0px'],
                ["style", "font-style", 'normal'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '17px'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '500']
            ],
            "${symbolSelector}": [
                ["style", "height", '95px'],
                ["style", "width", '382px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: true,
            timeline: [
                { id: "eid1338", tween: [ "style", "${_instruction}", "left", '-59px', { fromValue: '0px'}], position: 300, duration: 500, easing: "easeInOutBack" },
                { id: "eid1329", tween: [ "color", "${_instruction}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 300, duration: 500, easing: "easeInOutSine" },
                { id: "eid151", tween: [ "color", "${_level_x_goal}", "color", 'rgba(255,255,255,0.6118)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 200, duration: 500, easing: "easeInOutBack" },
                { id: "eid147", tween: [ "style", "${_level_x_goal}", "left", '-59px', { fromValue: '0px'}], position: 200, duration: 500, easing: "easeInOutSine" },
                { id: "eid1499", tween: [ "style", "${_instruction}", "width", '382px', { fromValue: '382px'}], position: 300, duration: 0, easing: "easeInOutBack" }            ]
        }
    }
},
"action-text": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['adobe-clean, sans-serif', [125, '%'], 'rgba(255,255,255,1.00)', '500', 'none', 'italic'],
                    id: 'action-instruction',
                    text: 'Click and drag to draw a straight line. ',
                    type: 'text',
                    rect: ['2px', '25px', '327px', '70px', 'auto', 'auto']
                },
                {
                    font: ['adobe-clean, sans-serif', [87.5, '%'], 'rgba(255,255,255,0.61)', '600', 'none', 'italic'],
                    id: 'level_x_action',
                    text: 'ACTION:',
                    type: 'text',
                    rect: ['2px', '0px', '189px', '17px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_level_x_action}": [
                ["style", "letter-spacing", '2px'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '62px'],
                ["style", "font-size", '87.5%'],
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "height", '17px'],
                ["style", "width", '189px']
            ],
            "${_action-instruction}": [
                ["style", "line-height", '127%'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-weight", '500'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '61px'],
                ["style", "width", '327px'],
                ["style", "top", '25px'],
                ["color", "color", 'rgba(255,255,255,0.00)'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "height", '44px'],
                ["style", "font-size", '125%']
            ],
            "${symbolSelector}": [
                ["style", "height", '69px'],
                ["style", "width", '327px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4800,
            autoPlay: true,
            timeline: [
                { id: "eid1370", tween: [ "style", "${_action-instruction}", "left", '0px', { fromValue: '61px'}], position: 4300, duration: 500, easing: "easeInOutBack" },
                { id: "eid1361", tween: [ "color", "${_action-instruction}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 4300, duration: 500, easing: "easeInOutSine" },
                { id: "eid871", tween: [ "style", "${_level_x_action}", "left", '1px', { fromValue: '62px'}], position: 4200, duration: 500, easing: "easeInOutSine" },
                { id: "eid862", tween: [ "color", "${_level_x_action}", "color", 'rgba(255,255,255,0.6118)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 4200, duration: 500, easing: "easeInOutSine" }            ]
        }
    }
},
"action-animation": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'drawn-line',
                    type: 'image',
                    rect: ['181px', '-321px', '359px', '10px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'lt-instructions-easy-assets/drawn-line.svg', '0px', '0px']
                },
                {
                    id: 'cursor',
                    type: 'image',
                    rect: ['17px', '-20px', '54px', '86px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cursor4.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_drawn-line}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '9deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '1px'],
                ["style", "top", '3px']
            ],
            "${_cursor}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '-3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '73px'],
                ["style", "width", '47px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8200,
            autoPlay: true,
            timeline: [
                { id: "eid1849", tween: [ "transform", "${_drawn-line}", "scaleX", '1', { fromValue: '0'}], position: 6200, duration: 700, easing: "easeOutBack" },
                { id: "eid1277", tween: [ "transform", "${_cursor}", "scaleY", '0.85', { fromValue: '1'}], position: 5400, duration: 206, easing: "easeOutBack" },
                { id: "eid1758", tween: [ "transform", "${_cursor}", "scaleY", '1', { fromValue: '0.85'}], position: 7400, duration: 206, easing: "easeOutSine" },
                { id: "eid1768", tween: [ "style", "${_cursor}", "top", '52px', { fromValue: '-6px'}], position: 6200, duration: 700, easing: "easeOutBack" },
                { id: "eid1782", tween: [ "style", "${_cursor}", "top", '56px', { fromValue: '52px'}], position: 8000, duration: 200, easing: "easeOutSine" },
                { id: "eid1767", tween: [ "style", "${_cursor}", "left", '342px', { fromValue: '-3px'}], position: 6200, duration: 700, easing: "easeOutBack" },
                { id: "eid1781", tween: [ "style", "${_cursor}", "left", '379px', { fromValue: '342px'}], position: 8000, duration: 200, easing: "easeOutSine" },
                { id: "eid1282", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 4800, duration: 400, easing: "easeInOutBack" },
                { id: "eid1280", tween: [ "transform", "${_cursor}", "scaleX", '0.85', { fromValue: '1'}], position: 5400, duration: 206, easing: "easeOutBack" },
                { id: "eid1757", tween: [ "transform", "${_cursor}", "scaleX", '1', { fromValue: '0.85'}], position: 7400, duration: 206, easing: "easeOutSine" }            ]
        }
    }
},
"instructions": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'group',
                    display: 'none',
                    id: 'action',
                    rect: ['0px', '0px', '570', '315', 'auto', 'auto'],
                    c: [
                    {
                        id: 'ok-button',
                        type: 'rect',
                        rect: ['491px', '278px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'action-text',
                        type: 'rect',
                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'action-animation',
                        type: 'rect',
                        rect: ['46px', '97px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'goal',
                    rect: ['61px', '0px', '509', '315', 'auto', 'auto'],
                    c: [
                    {
                        id: 'next-button',
                        type: 'rect',
                        rect: ['450px', '287px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'goal-text',
                        type: 'rect',
                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'draw-line-goal',
                        type: 'rect',
                        rect: ['24px', '101px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'action-animation',
                symbolName: 'action-animation',
                autoPlay: {

               }
            },
            {
                id: 'draw-line-goal',
                symbolName: 'draw-line-goal',
                autoPlay: {

               }
            },
            {
                id: 'next-button',
                symbolName: 'next-button',
                autoPlay: {

               }
            },
            {
                id: 'ok-button',
                symbolName: 'ok-button',
                autoPlay: {

               }
            },
            {
                id: 'action-text',
                symbolName: 'action-text',
                autoPlay: {

               }
            },
            {
                id: 'goal-text',
                symbolName: 'goal-text',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_goal-text}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_draw-line-goal}": [
                ["style", "top", '101px'],
                ["style", "opacity", '1'],
                ["style", "left", '24px']
            ],
            "${_ok-button}": [
                ["style", "top", '278px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '491px']
            ],
            "${_action}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_next-button}": [
                ["style", "top", '278px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '430px']
            ],
            "${_action-text}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '315px'],
                ["style", "width", '570px']
            ],
            "${_action-animation}": [
                ["style", "top", '97px'],
                ["style", "opacity", '1'],
                ["style", "left", '46px']
            ],
            "${_goal}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '61px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10300,
            autoPlay: true,
            labels: {
                "start": 1000,
                "action-instructions": 4600
            },
            timeline: [
                { id: "eid1834", tween: [ "style", "${_goal}", "opacity", '0', { fromValue: '1'}], position: 4600, duration: 250 },
                { id: "eid1808", tween: [ "style", "${_next-button}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeInOutBack" },
                { id: "eid1807", tween: [ "transform", "${_next-button}", "scaleX", '1', { fromValue: '0.5'}], position: 3328, duration: 172, easing: "easeOutBack" },
                { id: "eid1810", tween: [ "transform", "${_next-button}", "scaleY", '1', { fromValue: '0.5'}], position: 3328, duration: 172, easing: "easeOutBack" },
                { id: "eid1816", tween: [ "transform", "${_ok-button}", "scaleX", '1', { fromValue: '0.5'}], position: 10100, duration: 200, easing: "easeOutBack" },
                { id: "eid1854", tween: [ "style", "${_action}", "display", 'block', { fromValue: 'none'}], position: 4850, duration: 0 },
                { id: "eid1852", tween: [ "style", "${_goal}", "display", 'none', { fromValue: 'block'}], position: 4850, duration: 0 },
                { id: "eid1815", tween: [ "transform", "${_ok-button}", "scaleY", '1', { fromValue: '0.5'}], position: 10100, duration: 200, easing: "easeOutBack" },
                { id: "eid1813", tween: [ "style", "${_ok-button}", "opacity", '1', { fromValue: '0'}], position: 9800, duration: 500, easing: "easeInOutBack" },
                { id: "eid2898", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_action-text}', [] ], ""], position: 0 },
                { id: "eid2899", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_draw-line-goal}', [] ], ""], position: 0 },
                { id: "eid2900", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_goal-text}', [] ], ""], position: 0 },
                { id: "eid2901", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_action-animation}', [] ], ""], position: 0 },
                { id: "eid2702", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_goal-text}', [0] ], ""], position: 1000 },
                { id: "eid2700", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_draw-line-goal}', [0] ], ""], position: 1000 },
                { id: "eid2703", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_action-text}', [0] ], ""], position: 1000 },
                { id: "eid2701", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_action-animation}', [0] ], ""], position: 1000 },
                { id: "eid2889", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_action-text}', [3600] ], ""], position: 4600 },
                { id: "eid2888", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_action-animation}', [3600] ], ""], position: 4600 }            ]
        }
    }
},
"success-animation": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'background2',
                    type: 'image',
                    rect: ['0px', '0px', '615px', '360px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/background.svg', '0px', '0px']
                },
                {
                    rect: ['105px', '59px', '475px', '261px', 'auto', 'auto'],
                    id: 'violin_silhouette',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/violin_silhouette.svg', '0px', '0px']
                },
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['105px', '59px', '485', '266', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['10px', '5px', '475px', '261px', 'auto', 'auto'],
                        id: 'violin-shadow',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/violin-shadow.svg', '0px', '0px']
                    },
                    {
                        rect: ['418px', '0px', '58px', '79px', 'auto', 'auto'],
                        id: 'v_tuners',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/v_tuners.svg', '0px', '0px']
                    },
                    {
                        rect: ['0px', '21px', '470px', '241px', 'auto', 'auto'],
                        id: 'violin',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/violin.svg', '0px', '0px']
                    },
                    {
                        rect: ['113px', '42px', '307px', '129px', 'auto', 'auto'],
                        id: 'v_strings',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/v_strings.svg', '0px', '0px']
                    }]
                },
                {
                    rect: ['510px', '98px', '25px', '25px', 'auto', 'auto'],
                    id: 'origin1a',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/origin1a.svg', '0px', '0px']
                },
                {
                    rect: ['213px', '206px', '25px', '25px', 'auto', 'auto'],
                    id: 'origin1aCopy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/origin1a.svg', '0px', '0px']
                },
                {
                    rect: ['256px', '101px', '20px', '19px', 'auto', 'auto'],
                    id: 'small_note',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/small_note.svg', '0px', '0px']
                },
                {
                    rect: ['266px', '53px', '30px', '32px', 'auto', 'auto'],
                    id: 'medium_note',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/medium_note.svg', '0px', '0px']
                },
                {
                    rect: ['225px', '55px', '36px', '56px', 'auto', 'auto'],
                    id: 'large_note',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/large_note.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_v_strings}": [
                ["style", "top", '42px'],
                ["transform", "scaleY", '0.7'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '113px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_violin}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.7'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_origin1a}": [
                ["style", "top", '98px'],
                ["style", "opacity", '1'],
                ["style", "left", '510px'],
                ["style", "display", 'block']
            ],
            "${_violin_silhouette}": [
                ["style", "top", '59px'],
                ["style", "opacity", '1'],
                ["style", "left", '105px'],
                ["style", "display", 'block']
            ],
            "${_background2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_v_tuners}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.7'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '418px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_Group}": [
                ["style", "top", '59px'],
                ["style", "-webkit-transform-origin", [0,73], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '105px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_medium_note}": [
                ["style", "top", '67px'],
                ["transform", "scaleY", '0.6'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '266px'],
                ["transform", "scaleX", '0.6']
            ],
            "${symbolSelector}": [
                ["style", "height", '360px'],
                ["style", "width", '615px']
            ],
            "${_origin1aCopy}": [
                ["style", "top", '206px'],
                ["style", "opacity", '1'],
                ["style", "left", '213px'],
                ["style", "display", 'block']
            ],
            "${_large_note}": [
                ["style", "top", '55px'],
                ["transform", "scaleY", '0.6'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '225px'],
                ["transform", "scaleX", '0.6']
            ],
            "${_violin-shadow}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '0.7'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '10px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_small_note}": [
                ["style", "top", '115px'],
                ["transform", "scaleY", '0.6'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '256px'],
                ["transform", "scaleX", '0.6']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: true,
            labels: {
                "play-game": 1100,
                "loop": 3100
            },
            timeline: [
                { id: "eid26", tween: [ "style", "${_violin_silhouette}", "display", 'none', { fromValue: 'block'}], position: 1200, duration: 0 },
                { id: "eid102", tween: [ "transform", "${_medium_note}", "scaleX", '1', { fromValue: '0.6'}], position: 3200, duration: 300, easing: "easeOutBounce" },
                { id: "eid112", tween: [ "style", "${_origin1a}", "display", 'none', { fromValue: 'block'}], position: 1200, duration: 0 },
                { id: "eid64", tween: [ "transform", "${_v_tuners}", "scaleY", '1', { fromValue: '0.7'}], position: 1400, duration: 500, easing: "easeInOutBack" },
                { id: "eid97", tween: [ "style", "${_large_note}", "top", '41px', { fromValue: '55px'}], position: 3100, duration: 700, easing: "easeOutBounce" },
                { id: "eid103", tween: [ "style", "${_small_note}", "top", '92px', { fromValue: '115px'}], position: 3300, duration: 700, easing: "easeOutBounce" },
                { id: "eid115", tween: [ "style", "${_origin1aCopy}", "opacity", '0', { fromValue: '1'}], position: 1100, duration: 100 },
                { id: "eid104", tween: [ "transform", "${_small_note}", "scaleY", '1', { fromValue: '0.6'}], position: 3300, duration: 300, easing: "easeOutBounce" },
                { id: "eid74", tween: [ "transform", "${_violin-shadow}", "scaleY", '1', { fromValue: '0.7'}], position: 1200, duration: 500, easing: "easeInOutElastic" },
                { id: "eid25", tween: [ "style", "${_violin_silhouette}", "opacity", '0', { fromValue: '1'}], position: 1100, duration: 100 },
                { id: "eid58", tween: [ "transform", "${_v_strings}", "scaleY", '1', { fromValue: '0.7'}], position: 1600, duration: 400, easing: "easeInOutBounce" },
                { id: "eid31", tween: [ "style", "${_v_strings}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0 },
                { id: "eid57", tween: [ "transform", "${_v_strings}", "scaleX", '1', { fromValue: '0.7'}], position: 1600, duration: 400, easing: "easeInOutBounce" },
                { id: "eid52", tween: [ "transform", "${_violin}", "scaleY", '1', { fromValue: '0.7'}], position: 1200, duration: 500, easing: "easeInOutElastic" },
                { id: "eid100", tween: [ "style", "${_medium_note}", "opacity", '1', { fromValue: '0'}], position: 3200, duration: 300, easing: "easeOutBounce" },
                { id: "eid101", tween: [ "style", "${_medium_note}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
                { id: "eid33", tween: [ "style", "${_v_tuners}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0 },
                { id: "eid107", tween: [ "transform", "${_small_note}", "scaleX", '1', { fromValue: '0.6'}], position: 3300, duration: 300, easing: "easeOutBounce" },
                { id: "eid80", tween: [ "transform", "${_large_note}", "scaleX", '1', { fromValue: '0.6'}], position: 3100, duration: 300, easing: "easeOutBounce" },
                { id: "eid77", tween: [ "style", "${_medium_note}", "display", 'block', { fromValue: 'none'}], position: 3200, duration: 0, easing: "easeInOutBack" },
                { id: "eid32", tween: [ "style", "${_violin}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0 },
                { id: "eid76", tween: [ "style", "${_large_note}", "display", 'block', { fromValue: 'none'}], position: 3100, duration: 0, easing: "easeInOutBack" },
                { id: "eid75", tween: [ "style", "${_small_note}", "display", 'block', { fromValue: 'none'}], position: 3300, duration: 0, easing: "easeInOutBack" },
                { id: "eid51", tween: [ "transform", "${_violin}", "scaleX", '1', { fromValue: '0.7'}], position: 1200, duration: 500, easing: "easeInOutElastic" },
                { id: "eid111", tween: [ "style", "${_origin1a}", "opacity", '0', { fromValue: '1'}], position: 1100, duration: 100 },
                { id: "eid116", tween: [ "style", "${_origin1aCopy}", "display", 'none', { fromValue: 'block'}], position: 1200, duration: 0 },
                { id: "eid43", tween: [ "style", "${_v_strings}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 400 },
                { id: "eid72", tween: [ "transform", "${_violin-shadow}", "scaleX", '1', { fromValue: '0.7'}], position: 1200, duration: 500, easing: "easeInOutElastic" },
                { id: "eid73", tween: [ "style", "${_violin-shadow}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 500 },
                { id: "eid98", tween: [ "style", "${_medium_note}", "top", '43px', { fromValue: '67px'}], position: 3200, duration: 700, easing: "easeOutBounce" },
                { id: "eid99", tween: [ "transform", "${_medium_note}", "scaleY", '1', { fromValue: '0.6'}], position: 3200, duration: 300, easing: "easeOutBounce" },
                { id: "eid105", tween: [ "style", "${_small_note}", "opacity", '1', { fromValue: '0'}], position: 3300, duration: 300, easing: "easeOutBounce" },
                { id: "eid106", tween: [ "style", "${_small_note}", "opacity", '0', { fromValue: '1'}], position: 3600, duration: 500 },
                { id: "eid46", tween: [ "style", "${_v_tuners}", "opacity", '1', { fromValue: '0'}], position: 1400, duration: 500 },
                { id: "eid86", tween: [ "transform", "${_large_note}", "scaleY", '1', { fromValue: '0.6'}], position: 3100, duration: 300, easing: "easeOutBounce" },
                { id: "eid44", tween: [ "style", "${_violin}", "opacity", '1', { fromValue: '0'}], position: 1200, duration: 500 },
                { id: "eid63", tween: [ "transform", "${_v_tuners}", "scaleX", '1', { fromValue: '0.7'}], position: 1400, duration: 500, easing: "easeInOutBack" },
                { id: "eid83", tween: [ "style", "${_large_note}", "opacity", '1', { fromValue: '0'}], position: 3100, duration: 300, easing: "easeOutBounce" },
                { id: "eid96", tween: [ "style", "${_large_note}", "opacity", '0', { fromValue: '1'}], position: 3400, duration: 500 },
                { id: "eid34", tween: [ "style", "${_violin-shadow}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0 }            ]
        }
    }
},
"success-state": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '615px', '360px', 'auto', 'auto'],
                    id: 'success_overlay',
                    stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.65)']
                },
                {
                    rect: ['461', '303', '127', '32', 'auto', 'auto'],
                    id: 'next-level-button',
                    cursor: ['pointer'],
                    type: 'group',
                    c: [
                    {
                        rect: ['0px', '0px', '127px', '32px', 'auto', 'auto'],
                        boxShadow: ['', 4, 4, 0, 0, 'rgba(0,0,0,0.65098)'],
                        id: 'next_level_button',
                        stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(34,180,115,1.00)']
                    },
                    {
                        id: 'next_level_arrow',
                        type: 'image',
                        rect: ['110px', '10px', '8px', '11px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/triangle-w2.svg', '0px', '0px']
                    },
                    {
                        rect: ['15px', '10px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['adobe-clean, sans-serif', 14, 'rgba(255,255,255,1.00)', '700', 'none', 'normal'],
                        id: 'next_level_text',
                        text: 'NEXT LEVEL',
                        align: 'left',
                        type: 'text'
                    }]
                },
                {
                    rect: ['42px', '205px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['adobe-clean, sans-serif', 20, 'rgba(51,51,51,1)', '400', 'none', 'normal'],
                    id: 'encouraging_phrase',
                    text: 'This is just your forte.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['42px', '177px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['adobe-clean, sans-serif', 14, 'rgba(68,68,68,1.00)', '900', 'none', 'normal'],
                    id: 'level_complete',
                    text: 'LEVEL COMPLETE',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['42px', '113px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['adobe-clean, sans-serif', 36, 'rgba(51,51,51,1.00)', '900', 'none', 'normal'],
                    id: 'exclamation',
                    text: 'SHARP!',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_success_overlay}": [
                ["color", "background-color", 'rgba(255,255,255,0.65)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_next-level-button}": [
                ["style", "cursor", 'pointer']
            ],
            "${_exclamation}": [
                ["style", "top", '108px'],
                ["style", "letter-spacing", '3px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '72px'],
                ["style", "font-family", 'adobe-clean, sans-serif']
            ],
            "${_next_level_arrow}": [
                ["style", "top", '10px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '110px']
            ],
            "${_next_level_text}": [
                ["style", "top", '7px'],
                ["style", "letter-spacing", '1px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-weight", '700'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "left", '15px'],
                ["style", "font-size", '14px']
            ],
            "${_next_level_button}": [
                ["color", "background-color", 'rgba(160,78,135,1.00)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '127px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.offsetV", '4px'],
                ["subproperty", "boxShadow.offsetH", '4px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.15)']
            ],
            "${symbolSelector}": [
                ["style", "height", '360px'],
                ["style", "width", '615px']
            ],
            "${_level_complete}": [
                ["style", "top", '174px'],
                ["style", "letter-spacing", '2px'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(68,68,68,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '42px'],
                ["style", "font-size", '14px']
            ],
            "${_encouraging_phrase}": [
                ["style", "top", '199px'],
                ["style", "letter-spacing", '0'],
                ["style", "opacity", '0.000000'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "left", '42px'],
                ["style", "font-size", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14772,
            autoPlay: true,
            timeline: [
                { id: "eid2935", tween: [ "style", "${_level_complete}", "top", '174px', { fromValue: '174px'}], position: 14772, duration: 0 },
                { id: "eid7", tween: [ "style", "${_next_level_button}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 500 },
                { id: "eid5", tween: [ "style", "${_next_level_text}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 500 },
                { id: "eid2934", tween: [ "style", "${_exclamation}", "top", '108px', { fromValue: '108px'}], position: 14772, duration: 0 },
                { id: "eid4", tween: [ "style", "${_encouraging_phrase}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 500 },
                { id: "eid2936", tween: [ "style", "${_encouraging_phrase}", "top", '199px', { fromValue: '199px'}], position: 14772, duration: 0 },
                { id: "eid2937", tween: [ "style", "${_next_level_text}", "top", '7px', { fromValue: '7px'}], position: 14772, duration: 0 },
                { id: "eid10", tween: [ "color", "${_next_level_button}", "background-color", 'rgba(160,78,135,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(160,78,135,1.00)'}], position: 3500, duration: 0 },
                { id: "eid6", tween: [ "style", "${_next_level_arrow}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 500 },
                { id: "eid2", tween: [ "style", "${_exclamation}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutElastic" },
                { id: "eid3", tween: [ "style", "${_level_complete}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 500 },
                { id: "eid9", tween: [ "subproperty", "${_next_level_button}", "boxShadow.color", 'rgba(0,0,0,0.15)', { fromValue: 'rgba(0,0,0,0.15)'}], position: 3500, duration: 0 },
                { id: "eid8", tween: [ "style", "${_success_overlay}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid1", tween: [ "style", "${_exclamation}", "left", '42px', { fromValue: '72px'}], position: 500, duration: 500, easing: "easeOutElastic" }            ]
        }
    }
},
"fail-state": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'group',
                    display: 'none',
                    id: 'fail-state',
                    rect: ['0px', '0px', '615', '360', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'fail_overlay',
                        stroke: [1, 'rgba(0,0,0,0.00)', 'none'],
                        rect: ['0px', '0px', '615px', '360px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0.75)']
                    },
                    {
                        userClass: 'button',
                        id: 'skip-level-button',
                        type: 'group',
                        cursor: ['pointer'],
                        rect: ['472', '303', '116', '32', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '0px', '116px', '32px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'skip_button',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 4, 4, 0, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            font: ['adobe-clean, sans-serif', 14, 'rgba(34,34,34,1)', '800', 'none', 'normal'],
                            type: 'text',
                            id: 'skip_button-text',
                            text: 'SKIP LEVEL',
                            align: 'center',
                            rect: ['9px', '10px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'skip_button_triangle',
                            type: 'image',
                            rect: ['99px', '10px', '8px', '11px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/triangle_b3.svg', '0px', '0px']
                        }]
                    },
                    {
                        userClass: 'button',
                        id: 'try-again-button',
                        type: 'group',
                        cursor: ['pointer'],
                        rect: ['32', '303', '116', '32', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '0px', '116px', '32px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'try_again_button',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 4, 4, 0, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            font: ['adobe-clean, sans-serif', 14, 'rgba(34,34,34,1)', '800', 'none', 'normal'],
                            type: 'text',
                            id: 'try_again',
                            text: 'TRY AGAIN',
                            align: 'center',
                            rect: ['22px', '10px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            transform: [[0, 0], ['180']],
                            id: 'try_again_arrow',
                            type: 'image',
                            rect: ['6px', '10px', '8px', '11px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/triangle_b3.svg', '0px', '0px']
                        }]
                    },
                    {
                        font: ['adobe-clean, sans-serif', 20, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                        type: 'text',
                        id: 'fail_tip',
                        text: 'Be sure to connect the targets with your line.',
                        align: 'left',
                        rect: ['40px', '205px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        font: ['adobe-clean, sans-serif', 14, 'rgba(255,255,255,1)', '800', 'none', 'normal'],
                        type: 'text',
                        id: 'remember',
                        text: 'REMEMBER:',
                        align: 'left',
                        rect: ['40px', '177px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        font: ['adobe-clean, sans-serif', 36, 'rgba(255,255,255,1)', '900', 'none', 'normal'],
                        type: 'text',
                        id: 'exclamation',
                        text: 'YOU\'RE A LITTLE FLAT...',
                        align: 'left',
                        rect: ['40px', '113px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_remember}": [
                ["style", "top", '175px'],
                ["style", "letter-spacing", '2px'],
                ["style", "opacity", '0'],
                ["style", "font-weight", '800'],
                ["color", "color", 'rgba(188,190,192,1.00)'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "left", '40px'],
                ["style", "font-size", '14px']
            ],
            "${_fail-state}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_try_again_button}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '116px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.offsetV", '4px'],
                ["subproperty", "boxShadow.offsetH", '4px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)']
            ],
            "${_exclamation}": [
                ["style", "letter-spacing", '3px'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '900'],
                ["style", "left", '70px'],
                ["style", "font-size", '36px'],
                ["style", "top", '109px'],
                ["transform", "scaleY", '1'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "opacity", '0']
            ],
            "${_try_again_arrow}": [
                ["style", "top", '10px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '180deg']
            ],
            "${_fail_overlay}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,0.75)'],
                ["style", "left", '0px'],
                ["style", "opacity", '0.000000'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'none']
            ],
            "${_try_again}": [
                ["style", "top", '7px'],
                ["style", "letter-spacing", '1px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '22px'],
                ["style", "font-family", 'adobe-clean, sans-serif']
            ],
            "${_skip_button_triangle}": [
                ["style", "top", '10px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '99px']
            ],
            "${_skip_button}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '116px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.offsetV", '4px'],
                ["subproperty", "boxShadow.offsetH", '4px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)']
            ],
            "${symbolSelector}": [
                ["style", "height", '360px'],
                ["style", "width", '615px']
            ],
            "${_skip-level-button}": [
                ["style", "cursor", 'pointer']
            ],
            "${_try-again-button}": [
                ["style", "cursor", 'pointer']
            ],
            "${_skip_button-text}": [
                ["style", "top", '7px'],
                ["style", "letter-spacing", '1px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '9px'],
                ["style", "font-family", 'adobe-clean, sans-serif']
            ],
            "${_fail_tip}": [
                ["style", "top", '201px'],
                ["style", "letter-spacing", '1px'],
                ["style", "opacity", '0'],
                ["style", "font-weight", '400'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "left", '40px'],
                ["style", "font-size", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "subproperty", "${_try_again_button}", "boxShadow.color", 'rgba(0,0,0,0.25)', { fromValue: 'rgba(0,0,0,0.25)'}], position: 3750, duration: 0 },
                { id: "eid8", tween: [ "style", "${_try_again}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 500 },
                { id: "eid15", tween: [ "style", "${_fail_overlay}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid14", tween: [ "style", "${_skip_button}", "opacity", '1', { fromValue: '0.000000'}], position: 3250, duration: 500 },
                { id: "eid11", tween: [ "style", "${_skip_button_triangle}", "opacity", '1', { fromValue: '0.000000'}], position: 3250, duration: 500 },
                { id: "eid5", tween: [ "style", "${_remember}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
                { id: "eid3", tween: [ "style", "${_exclamation}", "left", '40px', { fromValue: '70px'}], position: 500, duration: 500, easing: "easeOutElastic" },
                { id: "eid13", tween: [ "subproperty", "${_skip_button}", "boxShadow.color", 'rgba(0,0,0,0.25)', { fromValue: 'rgba(0,0,0,0.25)'}], position: 3750, duration: 0 },
                { id: "eid2940", tween: [ "style", "${_fail_tip}", "top", '201px', { fromValue: '201px'}], position: 3750, duration: 0 },
                { id: "eid4", tween: [ "style", "${_exclamation}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutElastic" },
                { id: "eid2941", tween: [ "style", "${_try_again}", "top", '7px', { fromValue: '7px'}], position: 3750, duration: 0 },
                { id: "eid2942", tween: [ "style", "${_skip_button-text}", "top", '7px', { fromValue: '7px'}], position: 3750, duration: 0 },
                { id: "eid12", tween: [ "style", "${_skip_button-text}", "opacity", '1', { fromValue: '0.000000'}], position: 3250, duration: 500 },
                { id: "eid10", tween: [ "style", "${_try_again_button}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 500 },
                { id: "eid6", tween: [ "style", "${_fail_tip}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500 },
                { id: "eid2938", tween: [ "style", "${_exclamation}", "top", '109px', { fromValue: '109px'}], position: 3750, duration: 0 },
                { id: "eid2939", tween: [ "style", "${_remember}", "top", '175px', { fromValue: '175px'}], position: 3750, duration: 0 },
                { id: "eid1", tween: [ "style", "${_fail-state}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutElastic" },
                { id: "eid2", tween: [ "style", "${_fail-state}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeInOutElastic" },
                { id: "eid7", tween: [ "style", "${_try_again_arrow}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 500 }            ]
        }
    }
},
"start-screen": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'group',
                    display: 'block',
                    id: 'start_screen_group',
                    rect: ['0px', '0px', '547', '223', 'auto', 'auto'],
                    c: [
                    {
                        type: 'group',
                        id: 'start-button-group',
                        rect: ['467', '191', '80', '32', 'auto', 'auto'],
                        userClass: 'button',
                        c: [
                        {
                            rect: ['0px', '0px', '76px', '28px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'start_button',
                            stroke: [2, 'rgba(255,255,255,0.00)', 'solid'],
                            type: 'rect',
                            boxShadow: ['', 4, 4, 0, 0, 'rgba(0,0,0,0.10)']
                        },
                        {
                            id: 'triangle_b',
                            type: 'image',
                            rect: ['67px', '11px', '8px', '11px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/triangle_b42.svg', '0px', '0px']
                        },
                        {
                            font: ['adobe-clean, sans-serif', 14, 'rgba(51,51,51,1.00)', '900', 'none', 'normal'],
                            type: 'text',
                            id: 'Start',
                            text: 'START',
                            align: 'left',
                            rect: ['13px', '7px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    },
                    {
                        type: 'rect',
                        id: 'icon-box',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['1px', '91px', '32px', '32px', 'auto', 'auto'],
                        fill: ['rgba(200,144,183,1.00)']
                    },
                    {
                        transform: [[0, 0], ['-45']],
                        rect: ['7px', '106px', '20px', '3px', 'auto', 'auto'],
                        id: 'line-segment-tool-icon',
                        stroke: [2, 'rgb(255, 255, 255)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1.00)']
                    },
                    {
                        font: ['adobe-clean, sans-serif', 20, 'rgba(255,255,255,1)', '500', 'none', 'normal'],
                        type: 'text',
                        id: 'line-segment-text',
                        text: 'Line Segment',
                        align: 'left',
                        rect: ['49px', '92px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        font: ['adobe-clean, sans-serif', 14, 'rgba(200,144,183,1.00)', '900', 'none', 'normal'],
                        type: 'text',
                        id: 'tools',
                        text: 'TOOLS:',
                        align: 'left',
                        rect: ['1px', '62px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        font: ['adobe-clean, sans-serif', 36, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                        id: 'draw-lines-title',
                        text: 'DRAW LINES',
                        type: 'text',
                        rect: ['0px', '-5px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Start}": [
                ["style", "top", '7px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(51,51,51,1)'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "left", '13px'],
                ["style", "font-size", '14px']
            ],
            "${_draw-lines-title}": [
                ["style", "top", '-5px'],
                ["style", "letter-spacing", '4px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '36px']
            ],
            "${_tools}": [
                ["style", "top", '62px'],
                ["style", "letter-spacing", '2px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(200,144,183,1.00)'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "left", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_icon-box}": [
                ["color", "background-color", 'rgba(200,144,183,1.00)'],
                ["style", "height", '32px'],
                ["style", "top", '91px'],
                ["style", "left", '1px'],
                ["style", "width", '32px']
            ],
            "${_line-segment-text}": [
                ["style", "top", '92px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-weight", '500'],
                ["style", "font-family", 'adobe-clean, sans-serif'],
                ["style", "left", '49px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '223px'],
                ["style", "width", '547px']
            ],
            "${_triangle_b}": [
                ["style", "left", '67px'],
                ["style", "top", '11px']
            ],
            "${_start_button}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '76px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.0980392)'],
                ["color", "border-color", 'rgba(255, 255, 255, 0)'],
                ["subproperty", "boxShadow.offsetH", '4px'],
                ["subproperty", "boxShadow.offsetV", '4px']
            ],
            "${_start_screen_group}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_line-segment-tool-icon}": [
                ["style", "top", '106px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "rotateZ", '-45deg'],
                ["style", "height", '3px'],
                ["style", "border-style", 'none'],
                ["style", "left", '7px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_start_screen_group}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 200 },
                { id: "eid1", tween: [ "style", "${_start_screen_group}", "display", 'none', { fromValue: 'block'}], position: 200, duration: 0, easing: "easeOutElastic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-50899785");
