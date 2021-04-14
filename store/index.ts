import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import { MenuModule } from '~/store/menu'

export let MenuStore: MenuModule

function initialiseStores (store: Store<any>): void {
  MenuStore = getModule(MenuModule, store)
}

const initializer = (store: Store<any>): void => initialiseStores(store)

export const plugins = [ initializer ]
