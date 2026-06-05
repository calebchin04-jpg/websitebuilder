export function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-card overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5752.784511570015!2d-79.31467042363488!3d43.868423838484006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d5c8237940dd%3A0xaaaf8cecbf94ec8a!2sLa%20Grotta%20On%20Main!5e0!3m2!1sen!2sca!4v1776632726025!5m2!1sen!2sca"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="La Grotta On Main on Google Maps"
      />
    </div>
  )
}
