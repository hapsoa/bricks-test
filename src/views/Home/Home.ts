import { Component, Vue } from 'vue-property-decorator';
import BricksComponent from '@/components/Bricks/BricksComponent.vue';
import BricksComponentTs from '@/components/Bricks/BricksComponent.ts';

@Component({
  components: {
    BricksComponent,
  },
})
export default class Home extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    bricksComponent: BricksComponentTs;
  };

  public addBrick() {
    this.$refs.bricksComponent.addBrick();
  }
}
