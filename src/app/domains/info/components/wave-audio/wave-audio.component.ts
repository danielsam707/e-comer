import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import  WaveSurfer  from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
  // El signo de ! indica que no alerte por valor null o undefined.
  @Input({required: true}) audioUrl!: string; 
  // @ViewChild es para utilizar la referencia del div #wave del archivo html de este componente
  @ViewChild('wave') container!: ElementRef;
  //Crear una referencia al audio
  private ws!: WaveSurfer;
  // Es un estado para saber si esta sonando o no
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
    //Hay un elemento que nos permite saber si el audo se esta o no reproduciendo y es "on"
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));


  }

  //Metodo para pausar y dar play el metodo interno que se llama igual, esta en la libreria de wavesurfer
  playPause() {
    this.ws.playPause()
  }
}
