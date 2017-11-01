// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Select;

export interface Select extends Vue {
  /**
   * 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array,默认值空
   */
  value: string | number | string[] | number[];
  /**
   * 是否支持多选,默认值false
   */
  multiple: boolean;
  /**
   * 是否禁用,默认值false
   */
  disabled: boolean;
  /**
   * 是否可以清空选项，只在单选时有效,默认值false
   */
  clearable: boolean;
  /**
   * 是否支持搜索,默认值false
   */
  filterable: boolean;
  /**
   * 是否使用远程搜索,默认值false
   */
  remote: boolean;
  /**
   * 远程搜索的方法
   */
  'remote-method': () => void;
  /**
   * 当前是否正在远程搜索,默认值false
   */
  loading: boolean;
  /**
   * 远程搜索中的文字提示,默认值加载中
   */
  'loading-text': string;
  /**
   * 仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。默认值空
   */
  label: string | number | string[] | number[];
  /**
   * 选择框大小，可选值为large、small、default或者不填,默认值请选择
   */
  size: string;
  /**
   * 选择框默认文字,默认值请选择
   */
  placeholder: string;
  /**
   * 当下拉列表为空时显示的内容,默认值无匹配数据
   */
  'not-found-text': string;
  /**
   * 在返回选项时，是否将 label 和 value 一并返回，默认只返回,默认值false
   */
  'label-in-value': boolean;
  /**
   * 弹窗的展开方向，可选值为 bottom 和 top,默认值bottom
   */
  placement: 'bottom' | 'top';
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果,默认值false
   */
  transfer: boolean;
  /**
   * 给表单元素设置 id，详见 Form 用法。
   */
  'element-id': string;
  /**
   * 选中的Option变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性	当前选中项
   */
  'on-change': () => void;
  /**
   * 搜索词改变时触发,query
   */
  'on-query-change': (query: string) => void;
  /**
   * 设置搜索词，为空时清空，仅在 filterable="true" 时有效
   */
  setQuery: (query: string) => void;
  /**
   * 清空单选项，仅在 clearable="true" 时有效
   */
  clearSingleSelect: () => void;
}

export interface SelectOption extends Vue {
  /**
   * 选项值，默认根据此属性值进行筛选，必填
   */
  value: string | number;
  /**
   * 选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，
   * 无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。
   * 大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。
   */
  label: string;
  /**
   * 是否禁用当前项,默认值false
   */
  disabled: boolean;
}

export interface SelectOptionGroup extends Vue {
  /**
   * 分组的组名,默认值空
   */
  label: string;
}