import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'menu',
  stateFactory: true,
  namespaced: true
})
export class MenuModule extends VuexModule {
  public menu = false

  @Mutation
  public toggle (): void {
    this.menu = !this.menu
  }

  @Mutation
  public close (): void {
    this.menu = false
  }
}
