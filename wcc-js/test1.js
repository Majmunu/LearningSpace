export let config = {
  name: "走马灯",
  sources:
    '!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("antd")):"function"==typeof define&&define.amd?define(["react","antd"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).dbfuButton=t(e.React,e.Antd)}(this,(function(e,t){"use strict";function n(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var o=n(e);return e=>{console.log(e,"buttonProps");const n=e["x-component-props"]||e;return console.log(e,"测试按钮"),o.createElement(t.Tooltip,null,o.createElement(t.Button,{...e},n?.style?.content||n.content))}}));',
  icon: "CarouselTest",
  eventTitle: "走马灯交互",
  type: "form",
  schemas: {
    type: "object",
    properties: {
      dataEvent: {
        "x-component": "Interactive",
        "x-component-props": {
          title: "走马灯交互",
          settingType: "ComponentEvent",
          event: {
            eventList: [
              {
                name: "beforeUpload",
                label: "上传前事件",
                desc: "文件上传前触发的事件，用于自定义上传前的行为。",
                type: "component",
              },
              {
                name: "onChange",
                label: "改变事件",
                desc: "文件状态发生变化时触发的事件，例如上传、删除文件。",
                type: "component",
              },
              {
                name: "onRemove",
                label: "移除文件事件",
                desc: "移除文件时触发的事件。",
                type: "component",
              },
              {
                name: "onPreview",
                label: "预览文件事件",
                desc: "点击文件预览图标时触发的事件。",
                type: "component",
              },
              {
                name: "onDrop",
                label: "拖拽上传事件",
                desc: "拖拽文件到上传区域时触发的事件。",
                type: "function(info)",
              },
              {
                name: "onDownload",
                label: "下载文件事件",
                desc: "点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页",
                type: "component",
              },
            ],
            selectedEvent: [],
          },
        },
      },
    },
  },
  dataSourceSchemas: {
    type: "object",
    properties: {
      dataSource: {
        "x-component": "CarouselDataSource",
        "x-component-props": {
          title: "走马灯组件数据源",
          settingType: "ComponentData",
        },
      },
    },
  },
  eventList: [
    {
      name: "beforeChange",
      label: "切换前事件",
      desc: "在走马灯切换到下一个或上一个项之前触发的事件。",
      type: "component",
    },

    {
      name: "afterChange",
      label: "切换后事件",
      desc: "在走马灯切换到下一个或上一个项之后触发的事件。",
      type: "component",
    },
  ],
  locales: {
    "zh-CN": {
      title: "轮播图",
      settings: {
        "x-component-props": {
          autoplay: "是否自动切换",
          dotPosition: "面板指示点位置",
          dots: "是否显示面板指示点",
          easing: "动画效果",
          effect: "动画效果函数",
          cardTypes: [
            { label: "内置", value: "inner" },
            { label: "默认", value: "" },
          ],
          imageResource: "图片资源",
          showArrow: "是否显示左右箭头",
          dotColor: "选中的指示点颜色",
          dotForm: "指示点形态",
          timeInterval: "切换的时间间隔",
          currentPage: "当前轮播页",
        },
      },
    },
    "en-US": {
      title: "Card",
      settings: {
        "x-component-props": {
          type: "Type",
          title: "Title",
          extra: "Extra",
          cardTypes: [
            { label: "Inner", value: "inner" },
            { label: "Default", value: "" },
          ],
        },
      },
    },
    "ko-KR": {
      title: "카드",
      settings: {
        "x-component-props": {
          type: "타입",
          title: "제목",
          extra: "추가 항목",
          cardTypes: [
            { label: "안쪽", value: "inner" },
            { label: "기본", value: "" },
          ],
        },
      },
    },
  },
  title: { "zh-CN": "走马灯", "en-US": "Carousel" },
  props: {
    type: "string",
    "x-x6width": 300,
    "x-x6height": 200,
    // 'x-decorator': 'FormItem',
    "x-component": "Carousel",
    "x-component-props": {
      autoplay: "false",
      timeInterval: 2000,
      dots: false,
      dotColor: "#ffff",
      currentPage: 1,
      imageResource: [],
      dotPosition: "bottom",
    },
  },
  eventMaps: {},
};
