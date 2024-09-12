import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="w-full h-30 bottom-0 p-8 px-16 bg-gray-400 text-gray-50">
    <p class="text-2xl">Thank you for checking out my portfolio</p>
    <div>
        <ul class="flex flex-row gap-3">
            <li>
                <a href="https://github.com/ronaldo071515" target="_blank" aria-label="Github"
                    class="hover:text-gray-600">
                    <i class="fab fa-github" id="git"></i>
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/ronaldo-torres-656a37189" target="_blank" aria-label="linkedin"
                    class="hover:text-blue-500">
                    <i class="fab fa-linkedin" id="link"></i>
                </a>
            </li>
        </ul>
    </div>
</footer>
  `,
  styles: ``
})
export class FooterComponent {

}
