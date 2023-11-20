// class EventManager {
//   private name: string;
//   private events: { [eventName: string]: string };
//
//   constructor(name: string) {
//     this.name = name;
//     this.events = {};
//   }
//
//   addEvent(event: { [eventName: string]: string }) {
//     for (const eventName in event) {
//       if (event.hasOwnProperty(eventName)) {
//         this.events[eventName] = event[eventName];
//       }
//     }
//   }
//
//   removeEvent(event: string) {
//     if (this.events[event]) {
//       delete this.events[event];
//     }
//   }
//
//   getEventsDisplayName(): string[] {
//     return Object.values(this.events);
//   }
// }
//
// // 创建组件对象
// const component1 = new EventManager('Component 1');
// // component1.addEvent({
// //   'Event A': '事件A',
// //   'Event B': '事件B',
// //   'Common Event 1': '共享事件1'
// // });
// const component2 = new EventManager('Component 2');
// component2.addEvent({ 'Event C': '事件C', 'Common Event 1': '共享事件1' });
// // 获取以中文显示的事件列表
// const component1EventsInChinese = component1.getEventsDisplayName();
// const component2EventsInChinese = component2.getEventsDisplayName();
// console.log(component1EventsInChinese);
// console.log(component2EventsInChinese);
// console.log(component1);

// class EventManager {
//   private eventMap: {
//     [componentName: string]: { [eventName: string]: string };
//   };
//
//   constructor() {
//     this.eventMap = {};
//   }
//
//   addComponentEvents(
//     componentName: string,
//     events: { [eventName: string]: string }
//   ) {
//     if (!this.eventMap[componentName]) {
//       this.eventMap[componentName] = {};
//     }
//     for (const eventName in events) {
//       if (events.hasOwnProperty(eventName)) {
//         this.eventMap[componentName][eventName] = events[eventName];
//       }
//     }
//   }
//
//   getEventsInChinese(componentName: string): string[] {
//     const events = this.eventMap[componentName];
//     if (!events) {
//       return [];
//     }
//     return Object.keys(events).map(key => events[key]);
//   }
// }
//
// // 创建事件管理器
// const eventManager = new EventManager();
// // 添加事件到按钮组件
// eventManager.addComponentEvents('button component', {
//   'Click Event': '单击事件',
//   'Double Click Event': '双击事件'
// });
// // 获取按钮组件的事件列表
// const componentName = 'button component';
// const buttonComponentEventsInChinese = eventManager.getEventsInChinese(
//   componentName
// );
// console.log(`"${componentName}" 的事件列表：`, buttonComponentEventsInChinese);
// class EventManager {
//   private componentEvents: {
//     [componentName: string]: { [eventName: string]: string };
//   } = {};
//
//   addComponent(componentName: string, events: { [eventName: string]: string }) {
//     this.componentEvents[componentName] = events;
//   }
//
//   getComponentEvents(
//     componentName: string
//   ): { [eventName: string]: string } | undefined {
//     return this.componentEvents[componentName];
//   }
//
//   getAllComponentsAndEvents(): {
//     [componentName: string]: { [eventName: string]: string };
//   } {
//     return this.componentEvents;
//   }
//
//   getComponentNames(): string[] {
//     return Object.keys(this.componentEvents);
//   }
//
//   getComponentEventsInChinese(componentName: string): string[] | undefined {
//     const events = this.componentEvents[componentName];
//     if (!events) {
//       return undefined;
//     }
//     return Object.values(events);
//   }
// }
//
// // 创建事件管理器
// const eventManager = new EventManager();
// // 添加事件到不同组件
// eventManager.addComponent('Button Component', {
//   'Click Event': '单击事件',
//   'Double Click Event': '双击事件'
// });
// eventManager.addComponent('Select Component', { 'Change Event': '更改事件' });
// // 获取按钮组件的事件列表
// const buttonComponentEvents = eventManager.getComponentEventsInChinese(
//   'Button Component'
// );
// console.log(`Button Component 的事件列表：`, buttonComponentEvents);
// // 获取下拉选择框组件的事件列表
// const selectComponentEvents = eventManager.getComponentEventsInChinese(
//   'Select Component'
// );
// console.log(`Select Component 的事件列表：`, selectComponentEvents);
// // 尝试获取未知组件的事件列表
// const unknownComponentEvents = eventManager.getComponentEventsInChinese(
//   'Unknown Component'
// );
// if (unknownComponentEvents === undefined) {
//   console.log(`Unknown Component 不存在`);
// }
// const test1 = eventManager.getComponentEvents('Button Component');
// console.log('getComponentEvents', test1);
// const test2 = eventManager.getAllComponentsAndEvents();
// console.log('Names', test2);
class EventManager {
  private componentEvents: {
    [componentName: string]: {
      [eventName: string]: { en: string; cn: string };
    };
  } = {};

  addComponent(
    componentName: string,
    events: { [eventName: string]: { en: string; cn: string } }
  ) {
    this.componentEvents[componentName] = events;
  }

  getComponentEvents(
    componentName: string
  ): { [eventName: string]: { en: string; cn: string } } | undefined {
    return this.componentEvents[componentName];
  }

  getComponentNames(): string[] {
    return Object.keys(this.componentEvents);
  }

  getEventNames(componentName: string): string[] | undefined {
    const events = this.componentEvents[componentName];
    if (!events) {
      return undefined;
    }
    return Object.keys(events);
  }

  getAllComponentsAndEvents(): {
    [componentName: string]: {
      [eventName: string]: { en: string; cn: string };
    };
  } {
    return this.componentEvents;
  }
}

// 创建事件管理器
const eventManager = new EventManager();
// 添加事件到不同组件，接收一个 JSON 对象
eventManager.addComponent('Button Component', {
  onchange: { en: 'onchange', cn: '改变事件' },
  onclick: { en: 'onclick', cn: '单击事件' },
  ondblclick: { en: 'ondblclick', cn: '双击事件' }
});
eventManager.addComponent('Select Component', {
  onchange: { en: 'onchange', cn: '改变事件' },
  onmouseover: { en: 'onmouseover', cn: '鼠标悬停事件' }
});
// 获取所有组件和它们的事件
const allComponentsAndEvents = eventManager.getAllComponentsAndEvents();
console.log(`所有组件和它们的事件：`, allComponentsAndEvents);
const test = eventManager.getComponentEvents('Button Component');
console.log(test);
