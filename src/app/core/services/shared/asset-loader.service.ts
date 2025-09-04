import {ElementRef, Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetLoaderService {
  private renderer?: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setRenderer(renderer: Renderer2) {
    this.renderer = renderer;
  }

  async baseScript(additionalScripts?: string[]):Promise<void> {
    try {
      await this.loadScript('assets/libs/bootstrap/js/bootstrap.bundle.min.js');
      await this.loadScript('assets/libs/metismenujs/metismenujs.min.js');
      await this.loadScript('assets/libs/simplebar/simplebar.min.js');
      await this.loadScript('assets/libs/feather-icons/feather.min.js');
      /*additionalScripts?.forEach(src => {
        await this.loadScript(src)
      });*/
      if (additionalScripts) {
        for (const src of additionalScripts) {
          await this.loadScript(src);
        }
      }

      this.loadScript('assets/js/app.js');
    }catch (error) {
      console.error(error);
    }
  }

  async baseLink(additionalLinks?: string[]):Promise<void> {
    try {
      await this.loadLink('assets/css/bootstrap.min.css');
      await this.loadLink('assets/css/icons.min.css');
      if(additionalLinks) {
        for (const href of additionalLinks) {
          await this.loadLink(href);
        }
      }
      await this.loadLink('assets/css/app.min.css');
    }catch (error) {
      console.error(error);
    }
  }

  loadLink(href: string, rel: string = 'stylesheet'):Promise<void> {
    return new Promise((resolve, reject) => {
      const linkElement = document.createElement('link');
      linkElement.href = href;
      linkElement.rel = rel;
      linkElement.onload = () => resolve();
      linkElement.onerror = () => reject(new Error(`Erreur de chargement du script: ${href}`));
      this.renderer?.appendChild(document.body, linkElement);
    })
  }

  loadScript(src: string):Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Erreur de chargement du script: ${src}`));
      this.renderer?.appendChild(document.body, script);
    });
  }

}
